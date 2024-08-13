'use client'

import { CardFinder } from "@/components"
import { Card } from "@/models"
import { useEffect, useState } from "react";
import { fetchDataCards } from "./Services/cardsList.service";
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";
import { Pagination } from "@/components/Pagination/Pagination";
import { CardListComponent } from "@/components/CardList/CardListComponent";

interface Props {
    initialState: Card[];
}

export const CardsList = ({initialState} : Props) => {

  const [cards, setCards] = useState<Card[]>(initialState);
  const [cardsTotal, setCardsTotal] = useState(0);
  const limit = 20; //cambiar por variable global .env
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

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

    if (filters.text && filters.text !== "") query += '&text='+filters.text;
    if (filters.types.length > 0) query += '&types='+getFilterValues(filters.types);
    if (filters.force.length > 0) query += '&force='+getFilterValues(filters.force);
    if (filters.archetypes.length > 0) query += '&archetypes='+getFilterValues(filters.archetypes);
    if (filters.products.length > 0) query += '&products='+getFilterValues(filters.products);
    if (filters.cost.length > 0) query += '&cost='+getFilterValues(filters.cost);
    if (filters.defense.length > 0) query += '&defense='+getFilterValues(filters.defense);
    if (filters.keywords.length > 0) query += '&keywords='+getFilterValues(filters.keywords);
    if (filters.rarities.length > 0) query += '&rarities='+getFilterValues(filters.rarities);
    if (filters.limits.length > 0) query += '&limits='+getFilterValues(filters.limits);
    
    setQueryParams(query);
    //router.push(`${path}?${query}`, {scroll:false});

  };

  return (
    <>
        <div className="md:mx-24 mx-4 px-8 py-5 bg-white mb-4 rounded">
          <CardFinder submit={(filters:any) => searchCards(filters)}/>
        </div>

        <div className="md:mx-24 mx-4 mb-4">
          <Pagination totalCount={cardsTotal} limit={limit} pageChangeMethod={getCards}>
            <CardListComponent cards={cards}/>
          </Pagination>
        </div>
    </>
  )
}
