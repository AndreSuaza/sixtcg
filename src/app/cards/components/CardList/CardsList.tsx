'use client'

import { CardFinder, CardView } from "@/components"
import { Card } from "@/models"
import { useEffect, useState } from "react";
import { fetchDataCards } from "./Services/cardsList.service";
import { CardDetail } from "../CardDetail/CardDetail";
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";
import { Pagination } from "@/components/Pagination/Pagination";

interface Props {
    initialState: Card[];
}

export const CardsList = ({initialState} : Props) => {

  const [cards, setCards] = useState<Card[]>(initialState);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [indexCards, setIndexCards] = useState(0);
  const [cardsTotal, setCardsTotal] = useState(0);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const formatParameters = () => {

    let parameters = '';
    for (const key of searchParams.keys()) {
      parameters = parameters+'&'+key+'='+searchParams.getAll(key)
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

    getCards(20, 0);
   
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

    if (filters.term && filters.term !== "") query += '&term='+filters.term;
    if (filters.types.length > 0) query += '&types='+getFilterValues(filters.types);
    if (filters.force.length > 0) query += '&force='+getFilterValues(filters.force);
    if (filters.archetypes.length > 0) query += '&archetypes='+getFilterValues(filters.archetypes);
    if (filters.products.length > 0) query += '&products='+getFilterValues(filters.products);
    if (filters.cost.length > 0) query += '&cost='+getFilterValues(filters.cost);
    if (filters.defence.length > 0) query += '&defence='+getFilterValues(filters.defence);
    if (filters.keywords.length > 0) query += '&keywords='+getFilterValues(filters.keywords);
    if (filters.rarities.length > 0) query += '&rarities='+getFilterValues(filters.rarities);
    //if (filters.limits.length > 0) query += '&limits='+getFilterValues(filters.limits);
    
    setQueryParams(query);
    router.push(`${path}?${query}`, {scroll:false});

  };

  const handlerCardDetail = () => {
    setShowCardDetail(!showCardDetail);
  }

  const setCardDetailData = (index: number) => {
    handlerCardDetail();
    setIndexCards(index);
  }

  const setCardDataNext = () => {
    if(indexCards+1 >= cards.length) {
      setIndexCards(0);
    } else [
      setIndexCards((i) => i+1)
    ]
  }

  const setCardDataBefore = () => {
    if(indexCards-1 <= 0 ) {
      setIndexCards(cards.length-1);
    } else [
      setIndexCards((i) => i-1)
    ]
  }
  
  return (
    <>
        <div className="mx-24 px-8 py-5 bg-white mb-4 rounded">
          <CardFinder submit={(filters:any) => searchCards(filters)}/>
        </div>
        <div className="mx-24 mb-4">
          <Pagination totalCount={cardsTotal} limit={20}/>
        </div>
        <section className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 px-24 justify-items-center">
          {cards.map((card, i) => 
            <div key={card.id} className="cursor-pointer" onClick={() => setCardDetailData(i)}>
              <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} zoom={false}/>
            </div>  
          )}
        </section>
        {showCardDetail && 
          <CardDetail cards={cards} close={handlerCardDetail} index={indexCards} nextCard={setCardDataNext} beforeCard={setCardDataBefore}/>
        }
    </>
  )
}
