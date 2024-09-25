'use client'

import { Card } from "@/models"
import { useEffect, useState } from "react";
import { fetchDataCards } from "./Services/cardPriceList";
import { useSearchParams } from 'next/navigation'
import { Pagination } from "@/components/Pagination/Pagination";
import { CardFinderPrices } from "@/components/CardFinder/CardFinderPrices";
import { CardListPricesComponent } from '../../../../components/CardList/CardListPricesComponent';
import Products from '../../../productos/page';

interface Props {
    initialState: Card[];
}

export const CardsPriceList = ({initialState} : Props) => {

  const [cards, setCards] = useState<Card[]>(initialState);
  const [cardsTotal, setCardsTotal] = useState(0);
  const limit = 24; //cambiar por variable global .env
  const searchParams = useSearchParams();


  const formatParameters = () => {
    let parameters = '';
    for (const key of searchParams.keys()) {
      parameters = parameters+'&'+key+'='+searchParams.getAll(key);
    }
    return parameters;
  }

  const [queryParams, setQueryParams] = useState(formatParameters());

  const getCards = async (limit: number, offset: number) => {
    const data = await fetchDataCards(limit, offset, queryParams);
    setCards( data.cards );
    setCardsTotal(data.totalCount[0]?.count || 0);
  }

  useEffect(() => {  
    getCards(limit, 0);
  },[queryParams]);

  const getFilterValues = (filter: any[]) => {
    let values = "";

    filter.forEach((value, index) => {
      values += index < filter.length -1 ? value+"," : value
    });

    return values;
  }


  const searchCards = async (filters: any) => { 

    let query = "";
    console.log(filters);
    if (filters.text && filters.text !== "") query += '&text='+filters.text;
    if (filters.products.length > 0) query += '&products='+getFilterValues(filters.products);
    if (filters.rarities.length > 0) query += '&rarities='+getFilterValues(filters.rarities);
    // if (filters.prices.length > 0) query += '&prices='+getFilterValues(filters.prices);

    setQueryParams(query);

  };

  return (
    <>
        <div className="md:mx-24 mx-4 px-8 py-5 bg-white mb-4 rounded">
          <CardFinderPrices submit={(filters:any) => searchCards(filters)}/>
        </div>

        <div className="md:mx-24 mx-4 mb-4">
          <Pagination totalCount={cardsTotal} limit={limit} pageChangeMethod={getCards}>
            <CardListPricesComponent cards={cards}/>
          </Pagination>
        </div>
    </>
  )
}
