import { CardView } from "@/components";
import { Modal } from "@/components/Modal/Modal"
import { Card } from "@/models";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface Props {
  deck: Card[];
  close: () => void;
}

export const ModalHandDeck = ({deck, close}: Props) => {

  const shuffleDeck = (cards: Card[]) => {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }  

  const [hand, setHand] = useState(shuffleDeck(deck)); 
  
  const setMulligan = () => {
    setHand(shuffleDeck(deck));
  }

  return (
    <Modal css="lg:w-2/3 md:w-1/2 w-full mx-4 bg-white">
        <div className="text-center"> 
              <h1 className="text-white font-bold text-2xl bg-primary p-3 mb-4">Prueba las manos de tu mazo</h1>
              <div className="text-indigo-500 mx-5 mb-4 p-5 border-dotted border-2 border-indigo-500 relative">
                <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3">
                {hand.map((card, i) => 
                    <div key={card._id}>
                        <CardView img={`/cards/${card.code}-${card.id}.webp`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} rarity={card.rarity}/>
                    </div>  
                )}
                </div>
              </div>
              <button className="btn hover-primary mb-6" onClick={setMulligan}>Volver a robar cartas</button>
        </div>
        <div className="absolute top-0 right-0 mr-1 mt-1 bg-primary hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={close}>
            <XMarkIcon className="h-6 w-6 text-white"/>
        </div>
    </Modal>
  )
}
