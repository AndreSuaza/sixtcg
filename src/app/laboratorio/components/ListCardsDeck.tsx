import { CardView } from '@/components'
import { Card } from '@/models';
import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react'


interface Props {
    title: string;
    decklist: Card[];
    color: number;
    numberOfCards: number;
    addCard: (card: Card) => void;
    reduceCard: (card: Card) => void;
    setCardDetail: (index: number) => void;
    increaseNumber?: number;
}

export const ListCardsDeck = ({title, decklist, color, numberOfCards, addCard, reduceCard, setCardDetail, increaseNumber = 0}: Props) => {
  
    return (
    <div className={`relative px-6 border-dotted border-2 rounded bg-black bg-opacity-25 
                         ${color === 1 && "border-violet-500"} 
                         ${color === 2 && "border-red-500"} 
                         ${color === 3 && "border-blue-500"} 
                    my-8`}>
        <h3 className={`absolute -top-5 py-1 px-3 lg:left-2 md:left-2 -left-0.5  
                         ${color === 1 && "bg-violet-500"} 
                         ${color === 2 && "bg-red-500"} 
                         ${color === 3 && "bg-blue-500"}`
                     }>{`${title} [ ${numberOfCards} ]`}</h3>
        <section 
            className={`grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center py-6`}
        >
            {decklist.map((card, i: number) => 
                <div key={card._id} className={`relative`}>
                    <div className="absolute top-6 -right-3 z-10">
                        {card.copys && <div className={`${card.copys > 2 ? 'bg-red-600': 'bg-lime-600'} btn-lab text-xs leading-relaxed`}>{card.copys}</div>}
                        <div className="bg-black btn-lab mt-1 cursor-pointer bg-primary-h text-2xl" style={{lineHeight: 0.8}} onClick={() => addCard(card)}>+</div>
                        <div className="bg-black btn-lab mt-1 cursor-pointer bg-primary-h text-2xl" style={{lineHeight: 0.6}} onClick={() => reduceCard(card)}>-</div>
                        <div className="bg-cyan-700 btn-lab mt-1 cursor-pointer bg-primary-h" onClick={() => setCardDetail(i+increaseNumber)}><EyeIcon className="w-3 m-auto mt-1"/></div>
                    </div>
                    <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} border={true} rarity={card.rarity}/>
                </div>  
            )}
        </section>
    </div>
  )
}
