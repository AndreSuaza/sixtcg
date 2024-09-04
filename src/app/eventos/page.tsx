import { Title } from "@/components"
import Image from "next/image"
import Link from "next/link"

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

function Events() {

  return (
    <section className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat md:px-20">
      <Title title="Eventos" subtitle=""/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-20 md:mx-24 mx-4">
        <div>
        {/* <span className="text-end bg-primary px-3 pt-1 pb-2 mb-6"><b>31 Agosto</b></span> */}
        <Link href={'/eventos/lanzamiento'} >
        <Image 
            width={600} 
            height={185} 
            src={'/events/lanzamiento-p.jpg'} 
            alt="Gran Evento de Lanzamiento Souls In Xtinction" 
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
            placeholder="blur" 
            className="m-auto border-solid border-2 border-indigo-500"
        />
        </Link>
        <h2 className="mt-6 text-center text-4xl">Gran Evento de Lanzamiento </h2>
        
      </div>
      </div>
      
    </section>
  )
}

export default Events