'use client'

import { useEffect, useState } from "react"
import { Pagination } from "@/components/Pagination/Pagination";
import { fetchDataCards } from "../cartas/components/CardList/Services/cardsList.service";
import { CardFinderLab } from "./components/CardFinderLab";
import { Card } from "@/models";
import { CardView } from "@/components";
import { ArrowDownTrayIcon, ArrowUpTrayIcon, EyeIcon, ListBulletIcon, MinusIcon, PhotoIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CardDetail } from "../cartas/components/CardDetail/CardDetail";
import { ModalExportDecklist } from "./components/ModalExportDecklist";
import { ModalImportDecklist } from "./components/ModalImportDecklist";
import { fetchDataDecklist } from "./services/decklist.service";

const Lab = () => {

    const [cards, setCards] = useState<Card[]>([]);
    const [decklist, setDecklist] = useState<Card[]>([]);
    const [numberOfCards, setNumberOfCards] = useState(0);
    const [cardsTotal, setCardsTotal] = useState(0);
    const [queryParamsCardFinder, setQueryParamsCardFinder] = useState("");
    const [showCardDetail, setShowCardDetail] = useState(false);
    const [indexCards, setIndexCards] = useState(0);
    const [showExpDeckCode, setShowExpDeckCode] = useState(false);
    const [deckCode, setDeckCode] = useState("");
    const [showImpDeckCode, setShowImpDeckCode] = useState(false);
    const limit = 20;

    const getCards = async (limit: number, offset: number) => {
        const data = await fetchDataCards(limit, offset, queryParamsCardFinder);
        setCards(data.cards);
        setCardsTotal(data.totalCount[0]?.count || 0);
    }

    const setCardsFilters = (filters: string) => {
        setQueryParamsCardFinder(filters);
    }

    useEffect(() => {  
        getCards(limit, 0);
    },[queryParamsCardFinder]);

    const addCardToDeck = (card:Card) => {
        
        if(numberOfCards <= 40) {
            let deckCard = decklist.find( cardInDeck => cardInDeck.id  === card.id );
            
            if( deckCard ) {
                if (deckCard.copys && deckCard.copys < 2) {
                    deckCard.copys = deckCard.copys+1;
                    setDecklist([...decklist])
                } else {
                    //Alerta
                }
            } else {
                deckCard = {...card, copys: 1};
                setDecklist([...decklist, deckCard])
            }

            setNumberOfCards(numberOfCards+1);

        } else {
            //Alerta
        }

    }

    const reduceCardToDeck = (card:Card) => {
        let deck = [];
        let deckCard = decklist.find( cardInDeck => cardInDeck.id  === card.id );

        if( deckCard) {
            if( deckCard.copys && deckCard.copys <= 1 ) {
                [deckCard, ...deck] = decklist;
                setDecklist(deck)
            } else {
                deckCard.copys = deckCard.copys ? deckCard.copys-1 : 0;
                setDecklist([...decklist])
            }
            setNumberOfCards(numberOfCards-1);
        }
        
    }

    const handlerExportDeckCode = () => {
        setShowExpDeckCode(!showExpDeckCode);
    }

    const handlerImportDeckCode = () => {
        setShowImpDeckCode(!showImpDeckCode);
    }

    //Detalle
    const handlerCardDetail = () => {
        setShowCardDetail(!showCardDetail);
    }

    const setCardDetailData = (index: number) => {

        handlerCardDetail();
        setIndexCards(index);
       
    }


    //funtions iconos

    const createDeckList = ( decklist: any[], cards: Card[]) => {
        let deck:Card[] = [];
        let numberCardsDeck = 0;

        cards.forEach((card, i) => {
          for (let index = 0; index < decklist.length; index++) {
            if(card.id === decklist[index]) { 
                card.copys = decklist[index+1]
                numberCardsDeck = numberCardsDeck+parseInt(decklist[index+1]);
                deck = [...deck, card];
                } 
            }
        });
        
        if(numberCardsDeck <= 40) {
            setNumberOfCards(numberCardsDeck);
            setDecklist(deck);
        }
       
      }
    

    const clearDeckList = () => {
        setDecklist([]);
        setNumberOfCards(0);
    }

    const exportDeck = () => {
        let exportText = "";
        decklist.map( card => exportText = exportText+card.id+","+card.copys+",");
        setDeckCode(exportText);
        if(exportText !== ""){
            handlerExportDeckCode()
        }  
    }

    const importDeck = async (code:string) => {

        let deckListIds = "";
    
        const decklist = code.split(',');
        const ids = decklist.filter ( (elemet, index) => !(index % 2) );
        ids.map( data => deckListIds = deckListIds+data+",");

        const data = await fetchDataDecklist(deckListIds);
        
        createDeckList(decklist, data);

    }

    return (
    <div className="bg-white grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">

        <div className="bg-white pt-3 mb-6 lg:px-10 md:px-10 px-6 border-r-2 border-indigo-500 min-h-screen">
            <CardFinderLab setCardsFilters={setCardsFilters}/>
           
            <Pagination totalCount={cardsTotal} limit={limit} pageChangeMethod={getCards}>
            <section className={`grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 my-8 justify-items-center relative`}>
                {cards.map((card, i) => 
                    <div key={card._id} className="cursor-pointer" onClick={() => addCardToDeck(card)}>
                    <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`}/>
                    </div>  
                )}
            </section>
            </Pagination>
        </div>
        <div className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat bg-black lg:col-span-2 md:col-span-2 lg:px-6 md:px-6 px-2 lg:w-2/3 md:w-2/3 w-1/2 h-screen overflow-y-auto fixed top-0 right-0 pt-16">
            <div className="flex grid-cols-4 mt-6 mb-6 justify-end">
                <button 
                    className="bg-lime-600 lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6" 
                    onClick={clearDeckList}
                    title="Cartas en el Mazo"
                >
                    {numberOfCards}
                </button>
                {/* <button 
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    onClick={clearDeckList}
                    title="Crear Imagen del Mazo"
                >
                    <PhotoIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button> */}
                <button
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    onClick={exportDeck}
                    title="Exportar Mazo"
                >
                    <ArrowUpTrayIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button>
                <button 
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    onClick={handlerImportDeckCode}
                    title="Importar Mazo"
                >
                    <ArrowDownTrayIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button>
                {/* <button 
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    title="Ordenar Mazo"
                >
                    <ListBulletIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button> */}
                <button 
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    onClick={clearDeckList}
                    title="Borrar Mazo"
                >
                    <TrashIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button>
            </div>
            <section className={`grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-3 justify-items-center px-6`}>
                {decklist.map((card, i) => 
                    <div key={card._id} className="mb-3 mx-3 relative">
                        <div className="absolute top-6 -right-3 z-10">
                            {card.copys && <div className={`${card.copys > 2 ? 'bg-red-600': 'bg-lime-600'} btn-lab text-xs leading-relaxed`}>{card.copys}</div>}
                            <div className="bg-black btn-lab mt-1 cursor-pointer bg-primary-h text-2xl" style={{lineHeight: 0.8}} onClick={() => addCardToDeck(card)}>+</div>
                            <div className="bg-black btn-lab mt-1 cursor-pointer bg-primary-h text-2xl" style={{lineHeight: 0.6}} onClick={() => reduceCardToDeck(card)}>-</div>
                            <div className="bg-cyan-700 btn-lab mt-1 cursor-pointer bg-primary-h" onClick={() => setCardDetailData(i)}><EyeIcon className="w-3 m-auto mt-1"/></div>
                        </div>
                        <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} border={true}/>
                    </div>  
                )}
            </section>
        </div>
        {showCardDetail && 
            <CardDetail cards={decklist} close={handlerCardDetail} index={indexCards}/>
        }
        {showExpDeckCode &&
            <ModalExportDecklist code={deckCode} close={handlerExportDeckCode}/>
        }
        {showImpDeckCode &&
            <ModalImportDecklist close={handlerImportDeckCode} importDeck={importDeck}/>
        }
    </div>
  )
}


export default Lab