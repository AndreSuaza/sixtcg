import { LabComponent } from "./components/LabComponent"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Laboratio Souls In Xtinction',
  description: 'Crea los mazos más poderosos, locos y desafiantes.',
  openGraph: {
    title: 'Laboratio Souls In Xtinction',
    description: 'Crea los mazos más poderosos, locos y desafiantes.',
    url: 'https://soulsinxtinction.com/laboratorio',
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
    canonical: 'https://soulsinxtinction.com/laboratorio',
  }
}

function Lab() {
    return (
      <LabComponent/>
    )
  }
  
  export default Lab