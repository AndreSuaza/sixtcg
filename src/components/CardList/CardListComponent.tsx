import { Card } from "@/models";
import { CardView } from "..";
import { useState } from "react";
import { CardDetail } from "@/app/cartas/components/CardDetail/CardDetail";


interface Props { 
  cards: Card[]; 
  detail?: boolean;
  grid?: string;
}


export const CardListComponent = ({cards, detail=true, grid="5"}: Props) => {

  const [showCardDetail, setShowCardDetail] = useState(false);
  const [indexCards, setIndexCards] = useState(0);

  const handlerCardDetail = () => {
    setShowCardDetail(!showCardDetail);
  }

  const setCardDetailData = (index: number) => {
    if(detail) {
      handlerCardDetail();
      setIndexCards(index);
    }
  }

  return (
    <>
    <section className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-8 justify-items-center relative`}>
      {cards.map((card, i) => 
        <div key={card._id} className="cursor-pointer" onClick={() => setCardDetailData(i)}>
          <CardView img={`/cards/${card.code}-${card.id}.webp`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} rarity={card.rarity}/>
        </div>  
      )}
    </section>
    {showCardDetail && 
      <CardDetail cards={cards} close={handlerCardDetail} index={indexCards}/>
    }
    </>
  )
}
