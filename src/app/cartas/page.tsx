
import { CardsList } from "./components/CardList/CardsList";
import { Title } from "@/components/Title/Title";
import { Card } from "@/models";

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