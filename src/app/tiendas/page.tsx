import { StoreMap } from "@/components/StoreMap/StoreMap";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tiendas Souls In Xtinction',
  description: 'Encuentra todas las tiendas oficiales de Souls In Xtinction.',
  openGraph: {
    title: 'Tiendas Souls In Xtinction',
    description: 'Encuentra todas las tiendas oficiales de Souls In Xtinction.',
    url: 'https://soulsinxtinction.com/tiendas',
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
    canonical: 'https://soulsinxtinction.com/tiendas',
  }
}

const Tiendas = async () => {

  return (

    <div className="bg-slate-100 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2">

      <StoreMap/>
        
    </div>

   
  )
}

export default Tiendas