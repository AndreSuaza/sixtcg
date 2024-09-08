import { Title } from "@/components"
import { EventsListComponent } from "@/components/EventsList/EventsListComponent";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Eventos Souls In Xtinction',
  description: 'Conoce todos los eventos de Souls In Xtinction. ',
  openGraph: {
    title: 'Eventos Souls In Xtinction',
    description: 'Conoce todos los eventos de Souls In Xtinction. ',
    url: 'https://soulsinxtinction.com/eventos',
    siteName: 'Souls In Xtinction',
    images: [
      {
        url: 'https://soulsinxtinction.com/og.jpg',
        width: 800,
        height: 600,
        alt: 'Souls In Xtinction TCG',
      }
    ],
    locale: 'en_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://soulsinxtinction.com/eventos',
  }
}


const Events = async () => {

  return (
    <section className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat md:px-20 w-full min-h-screen">
      <Title title="Eventos" subtitle=""/>

      <div className="mx-4">
      <EventsListComponent/>
      </div>
        
      
    </section>
  )
}

export default Events