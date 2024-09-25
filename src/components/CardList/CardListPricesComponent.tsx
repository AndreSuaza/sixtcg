import { Card } from "@/models";
import { CardView } from "..";
import { useState } from "react";
import { CardDetail } from "@/app/cartas/components/CardDetail/CardDetail";


interface Props { 
  cards: Card[]; 
  detail?: boolean;
  grid?: string;
}


export const CardListPricesComponent = ({cards, detail=true, grid="5"}: Props) => {

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
    <section className={`grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-10 my-8 justify-items-center relative`}>
      {cards.map((card, i) => 
        <div key={card._id} className="cursor-pointer" onClick={() => setCardDetailData(i)}>
          <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`}/>
          <p className="text-center mt-4 md:text-2xl text-4xl">${new Intl.NumberFormat().format(card.price)}</p>
        </div>  
      )}
    </section>
    {showCardDetail && 
      <CardDetail cards={cards} close={handlerCardDetail} index={indexCards}/>
    }
    </>
  )
}
