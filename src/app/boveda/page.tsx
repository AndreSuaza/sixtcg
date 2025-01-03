import { Card } from "@/models";
import { Metadata } from "next";
import { CardsPriceList } from "./components/CardPriceList/CardPriceList.services";


export const metadata: Metadata = {
  title: 'Precios de cartas individuales Souls In Xtinction',
  description: 'Encuentra los precios de cartas individuales Souls In Xtinction',
  openGraph: {
    title: 'Precios de cartas individuales Souls In Xtinction',
    description: 'Encuentra los precios de cartas individuales Souls In Xtinction',
    url: 'https://soulsinxtinction.com/boveda',
    siteName: 'Souls In Xtinction Precios de cartas individuales',
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
    canonical: 'https://soulsinxtinction.com/boveda',
  }
}
async function Vault () {

  const cards: Card[] = [];

  return (
    <>
    <main className="bg-[url('/boveda.webp')] bg-no-repeat bg-center h-5/6 text-center grid py-10">
        <div className="mt-20">    
            <h1 className="uppercase text-7xl mb-4 mt-10 font-bold">la bóveda</h1>
            <p className="uppercase text-4xl mb-10">Precios sugeridos al público.</p>
        </div>
    </main>
    <section>
        <CardsPriceList initialState={cards}/>
    </section>
    </>
  )
}

export default Vault