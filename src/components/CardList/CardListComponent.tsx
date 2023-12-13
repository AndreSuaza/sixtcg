import { Card } from "@/models";
import { CardView } from "..";
import { useState } from "react";
import { CardDetail } from "@/app/cartas/components/CardDetail/CardDetail";


interface Props { 
  cards: Card[]; 
  detail?: boolean;
}


export const CardListComponent = ({cards, detail=true}: Props) => {

  const [showCardDetail, setShowCardDetail] = useState(false);
  const [indexCards, setIndexCards] = useState(0);

  const handlerCardDetail = () => {
    setShowCardDetail(!showCardDetail);
  }

  const setCardDetailData = (index: number) => {
    handlerCardDetail();
    setIndexCards(index);
  }

  return (
    <>
    <section className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 my-8 justify-items-center relative">
      {cards.map((card, i) => 
        <div key={card.id} className="cursor-pointer" onClick={() => setCardDetailData(i)}>
          <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`}/>
        </div>  
      )}
    </section>
    {(detail && showCardDetail) && 
      <CardDetail cards={cards} close={handlerCardDetail} index={indexCards}/>
    }
    </>
  )
}
