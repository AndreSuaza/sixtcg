import { CardView, Title } from "@/components";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Gran torneo de lanzamiento Souls In Xtinction',
  description: 'Torneo de lanzamiento del nuevo juego de cartas coleccionables Souls In Xtinction',
  openGraph: {
      title: 'Gran torneo de lanzamiento Souls In Xtinction',
      description: 'Torneo de lanzamiento del nuevo juego de cartas coleccionables Souls In Xtinction',
      url: 'https://soulsinxtinction.com/eventos/lanzamiento',
      siteName: 'Gran torneo de lanzamiento Souls In Xtinction',
      images: [
          {
          url: 'https://soulsinxtinction.com/events/lanzamiento-p.jpg',
          width: 800,
          height: 1200,
          alt: 'Gran torneo de lanzamiento Souls In Xtinction',
          }
      ],
      locale: 'en_ES',
      type: 'website',
  },
}

export default function Lanzamiento() {
  return (
    <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">
                <div className="bg-white px-10 py-10 mb-10">
                  <Image 
                            width={1300 } 
                            height={400} 
                            src={'/events/lanzamiento.jpg'} 
                            alt="Gran Evento de Lanzamiento Souls In Xtinction" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur" 
                            className="m-auto mb-10"
                        />
                    <article className="px-10 py-6 rounded mb-10 text-3xl">
                        <div>
                          <p className="mb-4 leading-10">
                          ¡Te invitamos al gran lanzamiento de <b>Souls In Xtinction</b>! Un nuevo juego de cartas intercambiables donde la emoción, la estrategia y la aventura se unen en una experiencia épica.
                          </p>
                          <p className="mb-4 leading-10">
                          El torneo es <b>totalmente Gratis</b> y Por participar recibes un mazo de demostración.
                          </p>
                          <Image 
                            width={460} 
                            height={500} 
                            src={'/products/MD1.png'} 
                            alt="Caja Mazo Demostración Souls In Xtinction" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur" 
                            className="m-auto my-10"
                          />
                          <p className="mb-4 leading-10">
                          Sé el primero en descubrir este increíble universo, construir tu mazo y desafiar a otros jugadores en intensos combates.
                          </p>
                          
                        </div>
                        <h2 className="mb-6 py-10 text-gray-900 text-center text-6xl uppercase ">Premiación del Evento</h2> 
                        <p className="text-4xl text-center">Gana uno de estos cuatro increíbles mazos estructurados.</p>
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 my-10 md:mx-24 mx-4">
                          <Link href={'/productos/mazo-demonios'} target="_blank" title="Mazo Demonios" >
                          <Image 
                            width={600} 
                            height={600} 
                            src={ `/products/ME1.jpg`} 
                            alt="Mazo Demonios - Arte de la Destrucción"
                            className="rounded-t m-auto"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur"
                          />
                          </Link>
                          <Link href={'/productos/mazo-angeles'} target="_blank" title="Mazo Angeles" >
                          <Image 
                            width={600} 
                            height={600} 
                            src={ `/products/ME2.jpg`} 
                            alt="Mazo Angeles - Amanecer Celestia"
                            className="rounded-t m-auto"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur"
                          />
                          </Link>
                          <Link href={'/productos/mazo-espiritus'} target="_blank" title="Mazo Espirítus" >
                          <Image 
                            width={600} 
                            height={600} 
                            src={ `/products/ME3.jpg`} 
                            alt="Mazo Espirítus - El Árbol de la Vida"
                            className="rounded-t m-auto"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur"
                          />
                          </Link>
                          <Link href={'/productos/mazo-humanos'} target="_blank" title="Mazo Humanos" >
                          <Image 
                            width={600} 
                            height={600} 
                            src={ `/products/ME4.jpg`} 
                            alt="Mazo Humanos - Depliegue de la Armada"
                            className="rounded-t m-auto"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur"
                          />
                          </Link>
                        </div>
                        <p className="text-4xl text-center mb-10">Y además esta poderosa carta en su arte alternativo</p>
                        <CardView img={`/cards/P-003-9340.jpg`} alt="Devora Cobardes" title="Carta Promo Devora Cobardes"/>
                        <p className="mb-4 mt-10 leading-10 text-center">
                          Acompañamos en este gran evento  ¡No te lo pierdas! Prepárate para una experiencia inolvidable. 
                        </p>
                        <p className="mb-4 leading-10 text-center">
                        <b>¡Nos vemos en el campo de batalla!</b>
                        </p>
                    </article>
                </div>
        </main>
  )
}
