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

    const addCardToList = (
            list:Card[], 
            card:Card, 
            methodSetList: (cards:Card[]) => void,
            numberCardsPlusOne: (numberCards: number) => void,
            numberOfCards: number,
        ) => {
        
        let deckCard = list.find( cardInDeck => cardInDeck.id  === card.id );
        
        if( deckCard ) {
            if (deckCard.copys && deckCard.copys < 2 && card.limit == "" ) {
                deckCard.copys = deckCard.copys+1;
                methodSetList([...list]);
                numberCardsPlusOne(numberOfCards+1);
            } 
        } else {
            deckCard = {...card, copys: 1};
            methodSetList([...list, deckCard]);
            numberCardsPlusOne(numberOfCards+1);
        }

    }

    const reduceCardToList = (
        list:Card[], 
        card:Card, 
        methodSetList: (cards:Card[]) => void,
        numberCardsPlusOne: (numberCards: number) => void,
        numberOfCards: number,
        ) => {

        let deck = [];
        let deckCard = list.find( cardInDeck => cardInDeck.id  === card.id );

        if( deckCard) {
            if( deckCard.copys && deckCard.copys <= 1 ) {
                [deckCard, ...deck] = list;
                methodSetList(deck)
            } else {
                deckCard.copys = deckCard.copys ? deckCard.copys-1 : 0;
                methodSetList([...list])
            }
            numberCardsPlusOne(numberOfCards-1);
        }

    }

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
            if(numberOfCardsLimbo < 6) {
                reduceCardToList(decklistLimbo, card, setDecklistLimbo, setNumberOfCardsLimbo, numberOfCardsLimbo);
            }
            return;
        }

        if (card.types.includes("Mana")) {
            if(numberOfCardsMana < 6) {
                reduceCardToList(decklistMana, card, setDecklistMana, setNumberOfCardsMana, numberOfCardsMana);
            }
            return;
        }

        reduceCardToList(decklistMain, card, setDecklistMain, setNumberOfCardsMain, numberOfCardsMain);
        
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
        
        let mainDeck:Card[] = [];
        let limboDeck:Card[] = [];
        let manaDeck:Card[] = [];
        let mainNumberCardsDeck = 0;
        let limboNumberCardsDeck = 0;
        let manaNumberCardsDeck = 0;

        cards.forEach((card, i) => {
          for (let index = 0; index < decklist.length; index++) {
            if(card.id === decklist[index]) { 
                card.copys = decklist[index+1]
                if (card.types.includes("Limbo")) {
                    limboNumberCardsDeck = limboNumberCardsDeck+parseInt(decklist[index+1]);
                    limboDeck = [...limboDeck, card];
                    break;
                }

                if (card.types.includes("Mana")) {
                    manaNumberCardsDeck = manaNumberCardsDeck+parseInt(decklist[index+1]);
                    manaDeck = [...manaDeck, card];
                    break;
                }

                if (!card.types.includes("Ficha")) {
                    mainNumberCardsDeck = mainNumberCardsDeck+parseInt(decklist[index+1]);
                    mainDeck = [...mainDeck, card];
                    break;
                }
            } 
          }
        });

        if(limboNumberCardsDeck <= 6 && manaNumberCardsDeck <= 6 && mainNumberCardsDeck <=40) {
            setNumberOfCardsLimbo(limboNumberCardsDeck);
            setDecklistLimbo(limboDeck);

            setNumberOfCardsMana(manaNumberCardsDeck);
            setDecklistMana(manaDeck);
            
            setNumberOfCardsMain(mainNumberCardsDeck);
            setDecklistMain(sortListCards(mainDeck));
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

    const exportDeck = () => {
        let exportText = "";
        decklistMain.map( card => exportText = exportText+card.id+","+card.copys+",");
        decklistLimbo.map( card => exportText = exportText+card.id+","+card.copys+",");
        decklistMana.map( card => exportText = exportText+card.id+","+card.copys+",");
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

    const sortListCards = (list: Card[]) => {

        let units: Card[] = [];
        let spells: Card[] = [];
        let weapons: Card[] = [];
        let entities: Card[] = [];

        list.map(card => {
            if (card.types.includes("Unidad")) {
                units = [...units, card];
                return;
            }

            if (card.types.includes("Conjuro")) {
                spells = [...spells, card];
                return;
            }

            if (card.types.includes("Arma")) {
                weapons = [...weapons, card];
                return;
            }

            if (card.types.includes("Ente")) {
                entities = [...entities, card];
                return;
            }
        });

        return [...units, ...spells, ...weapons, ...entities];

    }

    const setSortListCards = () => {
        setDecklistMain(sortListCards(decklistMain));
    }

    return (
    <div className="bg-white grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">

        <div className="bg-white pt-3 pb-6 lg:px-10 md:px-10 px-6 border-r-2 border-indigo-500 min-h-screen">
            <CardFinderLab setCardsFilters={setCardsFilters}/>
           
            <Pagination totalCount={cardsTotal} limit={limit} pageChangeMethod={getCards} extendedForm={false}>
            <section className={`grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 my-8 justify-items-center relative`}>
                {cards.map((card, i) => 
                    <div key={card._id} className="cursor-pointer" onClick={() => addCardToDeck(card)}>
                    <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`}/>
                    </div>  
                )}
            </section>
            </Pagination>
        </div>

        <div className="bg-[url('/bg-cardlist.jpg')] lg:bg-contain md:lg:bg-contain bg-no-repeat bg-black lg:col-span-2 md:col-span-2 lg:px-6 md:px-6 px-2 lg:w-2/3 md:w-2/3 w-1/2 h-screen overflow-y-auto fixed top-0 right-0 pt-16">
            <div className="flex grid-cols-4 mt-6 mb-6 justify-end">
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
                <button 
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    onClick={setSortListCards}
                    title="Ordenar Mazo"
                >
                    <ListBulletIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button>
                <button 
                    className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
                    onClick={clearDeckList}
                    title="Borrar Mazo"
                >
                    <TrashIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                </button>
            </div>
            { decklistMain.length > 0 ? 
                <div className="pb-6">
                <div className="px-6 border-dotted border-2 border-violet-500 rounded bg-black bg-opacity-25">
                    <h3 className="my-2">{`Mazo Principal [ ${numberOfCardsMain} ] (Max 40 Cartas)`}</h3>
                    <section 
                        className={`grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center pb-6`}
                    >
                        {decklistMain.map((card, i) => 
                            <div key={card._id} className="relative">
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
                <div className="px-6 border-dotted border-2 border-red-500 rounded mt-2 bg-black bg-opacity-25">
                    <h3 className="my-2">{`Mazo Limbo [ ${numberOfCardsLimbo} ] (Max 6 Cartas)`}</h3>
                    <section 
                        className={`grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center pb-6`}
                    >
                        {decklistLimbo.map((card, i) => 
                            <div key={card._id} className="relative">
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
                { decklistMana.length > 0 && 
                <div className="px-6 border-dotted border-2 border-blue-500 rounded mt-2 bg-black bg-opacity-25">
                    <h3 className="my-2">{`Mazo Maná [ ${numberOfCardsMana} ] (Max 6 Cartas)`}</h3>
                    <section 
                        className={`grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center pb-6`}
                    >
                        {decklistMana.map((card, i) => 
                            <div key={card._id} className="relative">
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
                </div>}
                </div>
                : 
                <div className="m-auto lg:w-1/3 md:w-1/2 w-full mt-28 px-2 text-center lg:text-2xl mb:text-2xl text-xl">
                    <aside className="p-3 border-dotted border-2 mb-1 border-indigo-500 bg-black bg-opacity-25">
                        <p className="">Puedes agregar cartas a tu mazo dando click sobre su imagen.</p>
                    </aside>
                    <aside className="p-3 border-dotted border-2 mb-1 border-indigo-500 lg:text-2xl mb:text-2xl text-xl bg-black bg-opacity-25">
                        <p>También puedes pulsar en el botón</p>
                        
                        <button 
                            className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6 rounded my-2"
                            onClick={handlerImportDeckCode}
                            title="Importar Mazo"
                        >
                            <ArrowDownTrayIcon className="lg:w-6 md:w-6 w-4 m-auto"/>
                        </button>
                        <p>para cargar el código de tu Mazo.</p>
                    </aside>
                    
                </div>
            }
        </div>
        {showCardDetail && 
            <CardDetail cards={decklistMain} close={handlerCardDetail} index={indexCards}/>
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