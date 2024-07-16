import { Card } from "@/models";

export const addCardToList = (
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


export const reduceCardToList = (
    list:Card[], 
    card:Card, 
    methodSetList: (cards:Card[]) => void,
    numberCardsPlusOne: (numberCards: number) => void,
    numberOfCards: number,
    ) => {

    let deckCard = list.find( cardInDeck => cardInDeck.id  === card.id );

    if( deckCard) {
        if( deckCard.copys && deckCard.copys <= 1 ) {
            methodSetList(list.filter((c) =>  c._id != card._id));
        } else {
            deckCard.copys = deckCard.copys ? deckCard.copys-1 : 0;
            methodSetList([...list])
        }
        numberCardsPlusOne(numberOfCards-1);
    }

}


export const createDeckList = ( decklist: any[], cards: Card[]) => {
        
    let mainDeck:Card[] = [];
    let limboDeck:Card[] = [];
    let manaDeck:Card[] = [];
    let mainNumberCardsDeck = 0;
    let limboNumberCardsDeck = 0;
    let manaNumberCardsDeck = 0;

    cards.forEach((card, i) => {
      for (let index = 0; index < decklist.length; index++) {
        
        if(card.id === decklist[index]) { 

            card.copys = parseInt(decklist[index+1]);

            if (card.types.includes("Limbo")) {

                if(!limboDeck.find((c) =>  c.id === card.id)) {
                    limboNumberCardsDeck = limboNumberCardsDeck+parseInt(decklist[index+1]);
                    limboDeck = [...limboDeck, card];
                }
                break;
            }

            if (card.types.includes("Mana")) {
                if(!manaDeck.find((c) =>  c.id === card.id)) {
                    manaNumberCardsDeck = manaNumberCardsDeck+parseInt(decklist[index+1]);
                    manaDeck = [...manaDeck, card];
                }
                break;
            }

            if (!card.types.includes("Ficha")) {
                if(!mainDeck.find((c) =>  c.id === card.id)) {
                    mainNumberCardsDeck = mainNumberCardsDeck+parseInt(decklist[index+1]);
                    mainDeck = [...mainDeck, card];
                }
                break;
            }
        } 
      }
    });

    return { 
        mainDeck,
        limboDeck,
        manaDeck,
        mainNumberCardsDeck,
        limboNumberCardsDeck,
        manaNumberCardsDeck
    }

}


export const sortListCards = (list: Card[]) => {

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