import { CardView } from "@/components";
import { Modal } from "@/components/Modal/Modal"
import { ProductView } from "@/components/ProductView/ProductView";
import { Card, Product } from "@/models"
import { XMarkIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import Image from "next/image"
import { useState } from "react";
import { ProductsByCard } from "../ProductsByCard/ProductsByCard";

interface Props {
  cards: Card[];
  index: number;
  close: () => void;
}

export const CardDetail = ({cards, close, index}: Props) => {

  const [indexCards, setIndexCards] = useState(index);

  const card = cards[indexCards];

  const nextCard = () => {
    if(indexCards+1 >= cards.length) {
      setIndexCards(0);
    } else [
      setIndexCards((i) => i+1)
    ]
  }

  const beforeCard = () => {
    if(indexCards-1 <= 0 ) {
      setIndexCards(cards.length-1);
    } else [
      setIndexCards((i) => i-1)
    ]
  }

  return (
    <Modal>
        <div className="pb-10 mx-auto text-black relative">
          <div className="text-center bg-primary p-3 mb-4"> 
              <h1 className="text-white font-bold text-4xl">{card.name}</h1>
          </div>
          <div className="md:pl-10 px-4 md:flex gap-1">
            <div className="md:w-3/5">
              <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Detalle de ${card.name}`} zoom={false}/>
            </div>
            <div className="md:w-3/5 md:pr-10 ml-2">
              <table className="table-auto text-left w-full">
                  <tbody>
                    <tr className="border-b">
                      <th className="py-3">Tipo</th>
                      <td className="py-3 font-light">{card?.types.map((type: string, i: any) => {return i > 0 ? ', '+type : type})}</td>
                      <th className="py-3">Coste</th>
                      <td className="py-3 font-light">{card?.cost}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-3">Fuerza</th>
                      <td className="py-3 font-light">{card?.force}</td>
                      <th className="py-3">Defensa</th>
                      <td className="py-3 font-light">{card?.defense}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-3">Arqueotipo</th>
                      <td className="py-3 font-light">{card?.archetypes.map((archetype: string, i: any) => {return i > 0 ? ', '+archetype : archetype})}</td>
                      <th className="py-3">Palabras Clave</th>
                      <td className="py-3 font-light">{card?.keywords.map((keyword: string, i: any) => {return i > 0 ? ', '+keyword : keyword})}</td>
                    </tr>
                    <tr>
                      <th className="pt-2">Efecto</th>
                    </tr>
                    <tr className="border-b">
                      <td colSpan={4} className="pb-6 font-light">{card?.effect}</td>
                    </tr>
                    <tr>
                      <th className="pt-2">Productos</th>
                    </tr>
                    <tr>
                      <td className="w-full py-3 max-h-40" colSpan={4}>
                        <ProductsByCard productsByCard={card?.products}/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
          </div>
          <div className="absolute top-0 right-0 mr-1 mt-1 bg-primary hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={close}>
            <XMarkIcon className="h-6 w-6 text-white"/>
          </div>
          <div className="absolute top-72 left-0 bg-primary hover:bg-indigo-300 py-2 cursor-pointer ease-out duration-300" onClick={beforeCard}>
              <ChevronLeftIcon className="h-8 w-8 text-white font-bold"/>
          </div>
          <div className="absolute top-72 right-0 bg-primary hover:bg-indigo-300 py-2 cursor-pointer ease-out duration-300" onClick={nextCard}>
            <ChevronRightIcon className="h-8 w-8 text-white font-bold"/>
          </div>
        </div>
    </Modal>
  )
}
