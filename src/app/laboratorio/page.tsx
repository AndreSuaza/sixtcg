'use client'

import { useEffect, useState } from "react"
import { Pagination } from "@/components/Pagination/Pagination";
import { CardListComponent } from "@/components/CardList/CardListComponent";
import { fetchDataCards } from "../cartas/components/CardList/Services/cardsList.service";
import { CardFinderLab } from "./components/CardFinderLab";

const Lab = () => {

    const [cards, setCards] = useState([]);
    const [cardsTotal, setCardsTotal] = useState(0);
    const [queryParamsCardFinder, setQueryParamsCardFinder] = useState("");
    const limit = 20;

    const getCards = async (limit: number, offset: number) => {
        const data = await fetchDataCards(limit, offset, queryParamsCardFinder);
        setCards(data.cards);
        setCardsTotal(data.totalCount[0]?.count || 0);
    }

    const setCardsFilters = (filters: string) => {
        setQueryParamsCardFinder(filters);
        getCards(limit, 0);
    }

    useEffect(() => {  
        getCards(limit, 0);
    },[]);

    return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 min-h-screen">

        <div className="px-2 pt-3">
            <CardFinderLab setCardsFilters={setCardsFilters}/>
           
            <Pagination totalCount={cardsTotal} limit={limit} pageChangeMethod={getCards}>
                <CardListComponent cards={cards}/>
            </Pagination>
        </div>
        <div className="bg-blue">Deck</div>
    </div>
  )
}


export default Lab