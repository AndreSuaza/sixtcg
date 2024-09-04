import React from 'react'
import { Metadata } from "next";
import { Title } from '@/components';

export const metadata: Metadata = {
  title: 'Reglas Avanzadas Souls In Xtinction',
  description: 'Encuentra todas las reglas del juego de cartas intercambiables Souls In Xtinction.',
  openGraph: {
    title: 'Reglas Avanzadas Souls In Xtinction',
    description: 'Encuentra todas las reglas del juego de cartas intercambiables Souls In Xtinction.',
    url: 'https://soulsinxtinction.com/reglas',
    siteName: 'Reglas Avanzadas Souls In Xtinction',
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
    canonical: 'https://soulsinxtinction.com/reglas',
  }
}

async function Rules () {
    return (
      <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

      <Title title="Reglas avanzadas" subtitle="Encuentra todo lo que tienes que saber sobre Souls In Xtinction"/>

          <div className="bg-white px-10 py-10 mb-10">

              <section className="product px-4 py-6 text-2xl bg-light-primary rounded mb-6">
                  
                  <p className='mb-6'>En esta página, encontrarás un archivo PDF con las reglas completas del juego de cartas intercambiables <b>Souls In Xtinction</b>. Este documento te proporcionará toda la información necesaria para aprender a jugar, entender las mecánicas, y dominar las estrategias que te llevarán a la victoria.</p>
                  <p className='mb-6'>¡Prepárate para sumergirte en un mundo lleno de acción y desafío!</p>
                  
                  

              </section>
              <iframe className='w-full h-screen' src='/Manual de reglas SIX.pdf' />

              
        
              
              
              <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                 
              </section>

          </div>
  </main>
      
  )
}


export default Rules