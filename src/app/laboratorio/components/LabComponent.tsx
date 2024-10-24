'use client'

import { useEffect, useState } from "react"
import { Pagination } from "@/components/Pagination/Pagination";
import { fetchDataCards } from "../../cartas/components/CardList/Services/cardsList.service";
import { CardFinderLab } from "./CardFinderLab";
import { Card } from "@/models";
import { CardView } from "@/components";
import { ArrowDownTrayIcon, ArrowUpTrayIcon, EyeIcon, HandRaisedIcon, ListBulletIcon, PhotoIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CardDetail } from "../../cartas/components/CardDetail/CardDetail";
import { ModalExportDecklist } from "./ModalExportDecklist";
import { ModalImportDecklist } from "./ModalImportDecklist";
import { fetchDataDecklist } from "../services/decklist.service";
import { ModalImageDecklist } from "./ModalImageDecklist";
import { useSearchParams } from 'next/navigation'
import { formatParameters } from "@/utils/parametersurl";
import { ModalShareDecklist } from "./ModalShareDecklist";
import { addCardToList, createDeckList, reduceCardToList, sortListCards } from "../logic";
import { handlerModals } from "@/utils/utils";
import { ListCardsDeck } from "./ListCardsDeck";
import { ButtonToolsLab } from "./ButtonToolsLab";
import { ModalHandDeck } from "./ModalHandDeck";

export const LabComponent = () => {

    const [cards, setCards] = useState<Card[]>([]);
    const [decklistMain, setDecklistMain] = useState<Card[]>([]);
    const [decklistLimbo, setDecklistLimbo] = useState<Card[]>([]);
    const [decklistMana, setDecklistMana] = useState<Card[]>([]);
    const [numberOfCardsMain, setNumberOfCardsMain] = useState(0);
    const [numberOfCardsLimbo, setNumberOfCardsLimbo] = useState(0);
    const [numberOfCardsMana, setNumberOfCardsMana] = useState(0);
    const [cardsTotal, setCardsTotal] = useState(0);
    const [queryParamsCardFinder, setQueryParamsCardFinder] = useState("");
    const [showCardDetail, setShowCardDetail] = useState(false);
    const [indexCards, setIndexCards] = useState(0);
    const [showExpDeckCode, setShowExpDeckCode] = useState(false);
    const [deckCode, setDeckCode] = useState("");
    const [showImpDeckCode, setShowImpDeckCode] = useState(false);
    const [showImageDeckCode, setShowImageDeckCode] = useState(false);
    const [showShareDeckCode, setShowShareDeckCode] = useState(false);
    const [showHandDeck, setShowHandDeck] = useState(false);

    const searchParams = useSearchParams();

    const [queryParams, setQueryParams] = useState(formatParameters(searchParams));

    const limit = 20;

    const getCards = async (limit: number, offset: number) => {
        const data = await fetchDataCards(limit, offset, queryParamsCardFinder);
        setCards(data.cards);
        setCardsTotal(data.totalCount[0]?.count || 0);
    }

    const setCardsFilters = (filters: string) => {
        setQueryParamsCardFinder(filters);
    }

    const listByQueryParams = (queryParams: string) => {
        const list = queryParams.split("=", 2);
        if(list[0] === "&decklist") {
            importDeck(list[1]);
        }
    }

    useEffect(() => {  
        getCards(limit, 0);
        listByQueryParams(queryParams);
    },[queryParamsCardFinder]);

    const addCardToDeck = (card:Card) => {

        if (card.types.includes("Ficha")) {
            return;
        }

        if (card.types.includes("Limbo")) {
            if(numberOfCardsLimbo < 6) {
                addCardToList(decklistLimbo, card, setDecklistLimbo, setNumberOfCardsLimbo, numberOfCardsLimbo);
            }
            return;
        }

        if (card.types.includes("Mana")) {
            if(numberOfCardsMana < 6) {
                addCardToList(decklistMana, card, setDecklistMana, setNumberOfCardsMana, numberOfCardsMana);
            }
            return;
        }

        if(numberOfCardsMain < 40) {
            addCardToList(decklistMain, card, setDecklistMain, setNumberOfCardsMain, numberOfCardsMain);
        }
    }

    const reduceCardToDeck = (card:Card) => {
        
        if (card.types.includes("Limbo")) {
            if(numberOfCardsLimbo <= 6) {
                reduceCardToList(decklistLimbo, card, setDecklistLimbo, setNumberOfCardsLimbo, numberOfCardsLimbo);
            }
            return;
        }

        if (card.types.includes("Mana")) {
            if(numberOfCardsMana <= 6) {
                reduceCardToList(decklistMana, card, setDecklistMana, setNumberOfCardsMana, numberOfCardsMana);
            }
            return;
        }

        reduceCardToList(decklistMain, card, setDecklistMain, setNumberOfCardsMain, numberOfCardsMain);
        
    }

    const setCardDetailData = (index: number) => {

        handlerModals(showCardDetail, setShowCardDetail);
        setIndexCards(index);
       
    }

    const setDeckFromCode = ( decklist: any[], cards: Card[]) => {
    
        const deck = createDeckList(decklist, cards)

        if(deck.limboNumberCardsDeck <= 6) {
            setNumberOfCardsLimbo(deck.limboNumberCardsDeck);
            setDecklistLimbo(deck.limboDeck);
        }

        if(deck.manaNumberCardsDeck <= 6) {
            setNumberOfCardsMana(deck.manaNumberCardsDeck);
            setDecklistMana(deck.manaDeck);
        }
            
        if(deck.mainNumberCardsDeck <=40){
            setNumberOfCardsMain(deck.mainNumberCardsDeck);
            setDecklistMain(sortListCards(deck.mainDeck));
        }
       
    }

    const clearDeckList = () => {
        setDecklistMain([]);
        setNumberOfCardsMain(0);

        setDecklistLimbo([]);
        setNumberOfCardsLimbo(0);

        setDecklistMana([]);
        setNumberOfCardsMana(0);
        
    }

    const createCodeDeck = () => {
        let exportText = "";
        decklistMain.map( card => exportText = exportText+card.id+","+card.copys+",");
        decklistLimbo.map( card => exportText = exportText+card.id+","+card.copys+",");
        decklistMana.map( card => exportText = exportText+card.id+","+card.copys+",");
        return exportText;
    }

    const exportDeck = () => {
        
        const codeDeck = createCodeDeck();
        setDeckCode(codeDeck);

        if(codeDeck !== ""){
            handlerModals(showExpDeckCode, setShowExpDeckCode);
        }  
    }

    const importDeck = async (code:string) => {

        let deckListIds = "";
    
        const decklist = code.split(',');
        const ids = decklist.filter ( (elemet, index) => !(index % 2) );
        ids.map( data => deckListIds = deckListIds+data+",");

        const data = await fetchDataDecklist(deckListIds);
        
        setDeckFromCode(decklist, data);

    }

    const setSortListCards = () => {
        setDecklistMain(sortListCards(decklistMain));
    }

    const shareDeck = () => {
        setDeckCode(createCodeDeck());
        handlerModals(showShareDeckCode, setShowShareDeckCode);
    }

    const handDeck = () => {
        handlerModals(showHandDeck, setShowHandDeck);
    }

    return (
    <div className="bg-slate-100 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">

        <div className="bg-slate-50 pt-3 pb-6 lg:px-10 md:px-10 px-6 border-r-2 border-indigo-500 min-h-screen">
            <CardFinderLab setCardsFilters={setCardsFilters}/>
           
            <Pagination totalCount={cardsTotal} limit={limit} pageChangeMethod={getCards} extendedForm={false}>
            <section className={`grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 my-8 justify-items-center relative`}>
                {cards.map((card, i) => 
                    <div key={card._id} className="cursor-pointer" onClick={() => addCardToDeck(card)}>
                    <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} rarity={card.rarity}/>
                    </div>  
                )}
            </section>
            </Pagination>
        </div>

        <div className="bg-[url('/bg-cardlist.jpg')] lg:bg-contain md:bg-contain bg-no-repeat bg-black lg:col-span-2 md:col-span-2 lg:px-6 md:px-6 px-2 lg:w-2/3 md:w-2/3 w-1/2 h-screen overflow-y-auto fixed top-0 right-0 pt-16">
            <div className="flex grid-cols-4 mt-6 mb-6 justify-end">
                <ButtonToolsLab acction={shareDeck} title="Comparte tu mazo Mazo">
                    <ShareIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab>
                <ButtonToolsLab acction={handDeck} title="Prueba Manos de tu mazo">
                    <HandRaisedIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab>
                {/* <ButtonToolsLab acction={() => handlerModals(showImageDeckCode, setShowImageDeckCode)} title="Crear Imagen del Mazo">
                    <PhotoIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab> */}
                {/* <ButtonToolsLab acction={exportDeck} title="Exportar Mazo">
                    <ArrowUpTrayIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab>
                <ButtonToolsLab acction={() => handlerModals(showImpDeckCode, setShowImpDeckCode)} title="Importar Mazo">
                    <ArrowDownTrayIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab> */}
                <ButtonToolsLab acction={setSortListCards} title="Ordenar Mazo">
                    <ListBulletIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab>
                <ButtonToolsLab acction={clearDeckList} title="Borrar Mazo">
                    <TrashIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </ButtonToolsLab>
            </div>
            { (decklistMain.length > 0 || decklistLimbo.length > 0 || decklistMana.length > 0) ? 
                <div className="pb-6">
                <ListCardsDeck 
                    title="Mazo Principal" 
                    decklist={decklistMain} 
                    color={1}
                    numberOfCards={numberOfCardsMain}
                    addCard={addCardToDeck}
                    reduceCard={reduceCardToDeck}
                    setCardDetail={setCardDetailData}
                    increaseNumber={0}
                />
                <ListCardsDeck 
                    title="Mazo Limbo" 
                    decklist={decklistLimbo} 
                    color={2}
                    numberOfCards={numberOfCardsLimbo}
                    addCard={addCardToDeck}
                    reduceCard={reduceCardToDeck}
                    setCardDetail={setCardDetailData}
                    increaseNumber={decklistMain.length}
                />
                { decklistMana.length > 0 && 
                    <ListCardsDeck 
                        title="Mazo de Mana" 
                        decklist={decklistMana} 
                        color={3}
                        numberOfCards={numberOfCardsMana}
                        addCard={addCardToDeck}
                        reduceCard={reduceCardToDeck}
                        setCardDetail={setCardDetailData}
                        increaseNumber={decklistMain.length+decklistLimbo.length}
                    />
                }
                </div>
                : 
                <div className="m-auto lg:w-2/3 md:w-2/3 w-full mt-16 px-2 text-lg text-gray-200">
                    <aside className="p-3 border-dotted border-2 mb-2 border-indigo-500 bg-black bg-opacity-75">
                        <p>Agrega cartas a tu mazo dando click sobre su imagen.</p>
                    </aside>
                    {/* <aside className="p-3 border-dotted border-2 mb-1 border-indigo-500 bg-black bg-opacity-75">
                        <p>Puedes pulsar en el botón 
                            <button 
                                className="bg-primary bg-primary-h h-6 w-6 mx-2 rounded"
                                onClick={clearDeckList}
                                title="Crear Imagen del Mazo"
                            >
                                <PhotoIcon className="w-4 m-auto"/>
                            </button>
                            para Crear una Imagen de tu Mazo.</p>
                    </aside> */}
                    {/* <aside className="p-3 border-dotted border-2 mb-1 border-indigo-500 bg-black bg-opacity-75">
                        <p>Puedes pulsar en el botón 
                            <button
                                className="bg-primary bg-primary-h h-6 w-6 mx-2 rounded"
                                onClick={exportDeck}
                                title="Exportar Mazo"
                            >
                                <ArrowUpTrayIcon className="w-4 m-auto"/>
                            </button>
                             para Exportar el código de tu Mazo. (recuerda debes tener cartas en tu Mazo)</p>
                    </aside>
                    <aside className="p-3 border-dotted border-2 mb-1 border-indigo-500 bg-black bg-opacity-75">
                        <p>Puedes pulsar en el botón 
                            <button 
                                className="bg-primary bg-primary-h h-6 w-6 mx-2 rounded"
                                onClick={() => handlerModals(showImpDeckCode, setShowImpDeckCode)}
                                title="Importar Mazo"
                            >
                                <ArrowDownTrayIcon className="w-4 m-auto"/>
                            </button>
                            para Importar el código de tu Mazo.</p>
                    </aside> */}
                    
                    <aside className="p-3 border-dotted border-2 mb-2 border-indigo-500 bg-black bg-opacity-75 flex flex-row">
                        <div 
                            className="bg-primary bg-primary-h h-6 w-6 rounded mr-2 mt-1 px-1"
                        >
                            <ShareIcon className="w-4 m-auto mt-1"/>
                        </div>
                        <p>Comparte tu mazo con tus amigos.</p>
                    </aside>
                    <aside className="p-3 border-dotted border-2 mb-2 border-indigo-500 bg-black bg-opacity-75 flex flex-row">
                            <div 
                                className="bg-primary bg-primary-h h-6 w-6 rounded mr-2 mt-1 px-1"
                            >
                                <HandRaisedIcon className="w-4 m-auto mt-1"/>
                            </div>
                            <p>Prueba la primera mano de tu mazo.</p>
                    </aside> 
                    <aside className="p-3 border-dotted border-2 mb-2 border-indigo-500 bg-black bg-opacity-75 flex flex-row">
                            <div 
                                className="bg-primary bg-primary-h h-6 w-6 rounded mr-2 mt-1 px-1"
                            >
                                <ListBulletIcon className="w-4 m-auto mt-1"/>
                            </div>
                            <p>Ordenar tu mazo. (recuerda debes tener cartas en tu Mazo)</p>
                    </aside>
                    <aside className="p-3 border-dotted border-2 mb-10 border-indigo-500 bg-black bg-opacity-75 flex flex-row">
                            <div 
                                className="bg-primary bg-primary-h h-6 w-6 rounded mr-2 mt-1 px-1"
                            >
                                <TrashIcon className="w-4 m-auto mt-1"/>
                            </div>
                            <p>Limpia tu mazo.</p>
                    </aside> 
                </div>
            }
        </div>
        {showCardDetail && 
            <CardDetail cards={[...decklistMain, ...decklistLimbo, ...decklistMana]} close={() => handlerModals(showCardDetail, setShowCardDetail)} index={indexCards}/>
        }
        {showExpDeckCode &&
            <ModalExportDecklist code={deckCode} close={() => handlerModals(showExpDeckCode, setShowExpDeckCode)}/>
        }
        {showImpDeckCode &&
            <ModalImportDecklist close={() => handlerModals(showImpDeckCode, setShowImpDeckCode)} importDeck={importDeck}/>
        }
        {showImageDeckCode &&
            <ModalImageDecklist close={() => handlerModals(showImageDeckCode, setShowImageDeckCode)} deckMain={decklistMain} deckLimbo={decklistLimbo} deckMana={decklistMana}/>
        }
        {showShareDeckCode &&
            <ModalShareDecklist code={deckCode} close={() => handlerModals(showShareDeckCode, setShowShareDeckCode)}/>
        }
        {showHandDeck &&
            <ModalHandDeck deck={decklistMain} close={() => handlerModals(showHandDeck, setShowHandDeck)}/>
        }
    </div>
  )
}
