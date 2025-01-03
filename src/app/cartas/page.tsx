
import { CardsList } from "./components/CardList/CardsList";
import { Title } from "@/components/Title/Title";
import { Card } from "@/models";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Soul In Xtinction - Cartas',
  description: 'Buscador de todas las cartas de Souls In Xtinction',
  openGraph: {
    title: 'Souls In Xtinction Listado de Cartas',
    description: 'Encuentra aqui todo lo que necesitas para controlar el mundo de Souls In Xtinction',
    url: 'https://soulsinxtinction.com/cartas',
    siteName: 'Souls In Xtinction Listado de Cartas',
    images: [
      {
        url: 'https://soulsinxtinction.com/og.webp',
        width: 800,
        height: 600,
        alt: 'Listado de Cartas Souls In Xtinction TCG',
      }
    ],
    locale: 'en_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://soulsinxtinction.com/cartas',
  }
}
async function Cards () {

  const cards: Card[] = [];

  return (

    <main className="bg-[url('/bg-cardlist.webp')] bg-contain bg-no-repeat mb-10">
      <Title title="Listado de Cartas" subtitle="Encuentra aqui todo lo que necesitas para controlar el mundo de Souls In Xtinction"/>  
      <CardsList initialState={cards}/>
    </main>
    
  )
}

export default Cards