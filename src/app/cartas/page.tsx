
import { CardsList } from "./components/CardList/CardsList";
import { Title } from "@/components/Title/Title";
import { Card } from "@/models";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Soul In Xtinction - Cartas',
  description: 'Buscador de todas las cartas de Souls In Xtinction',
}

async function Cards () {

  const cards: Card[] = [];

  return (

    <div className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat mb-10">
      <Title title="Listado de Cartas" subtitle="Encuentra aqui todo lo que necesitas para controlar el mundo de six"/>  
      <CardsList initialState={cards}/>
    </div>

  )
}

export default Cards