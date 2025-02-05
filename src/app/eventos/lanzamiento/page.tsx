import { CardView } from "@/components";
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
          url: 'https://soulsinxtinction.com/events/lanzamiento-metadata.webp',
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
    <main className="bg-gray-50 md:px-20 md:text-2xl text-xl text-gray-700 pb-10">
            <div className="lg:w-5/6 md:w-screen mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 mb-20">
                  <Image 
                      width={600} 
                      height={837} 
                      src={'/events/lanzamiento-p.webp'} 
                      alt="Gran Evento de Lanzamiento Souls In Xtinction" 
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                      placeholder="blur" 
                      className=""
                  />
                  <div className="text-center mt-4 pt-28">
                    <div className="mb-20 text-primary font-bold uppercase">Lanzamientos</div>
                    <h1 className="font-bold text-gray-700 px-10 leading-normal mb-20">Gran Evento de Lanzamiento Souls In Xtinction</h1>
                    <p className="text-lg capitalize">nuevo juego de cartas coleccionables</p>
                    <div className="flex flex-row justify-center gap-4 mt-20">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                </div>
                <article className="lg:w-4/5 md:w-auto py-6 rounded mb-10 font-sans text-xl px-4">
                    <div>
                      <p className="mb-4 leading-10">
                      ¡Te invitamos al gran lanzamiento de <b>Souls In Xtinction</b>! Un nuevo juego de cartas intercambiables donde la emoción, la estrategia y la aventura se unen en una experiencia épica.
                      </p>
                      <p className="mb-4 leading-10">
                      El torneo es <b>totalmente gratis</b> y por participar recibes un mazo de demostración.
                      </p>
                      <Image 
                        width={300} 
                        height={500} 
                        src={'/products/MD1.webp'} 
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
                    <p className="text-center">Gana uno de estos cuatro increíbles mazos estructurados.</p>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 my-10 md:mx-24 mx-4">
                      <Link href={'/productos/mazo-demonios'} target="_blank" title="Mazo Demonios" >
                      <Image 
                        width={600} 
                        height={600} 
                        src={ `/products/ME1.webp`} 
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
                        src={ `/products/ME2.webp`} 
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
                        src={ `/products/ME3.webp`} 
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
                        src={ `/products/ME4.webp`} 
                        alt="Mazo Humanos - Depliegue de la Armada"
                        className="rounded-t m-auto"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                        placeholder="blur"
                      />
                      </Link>
                    </div>
                    <p className="text-center mb-10">Y además esta poderosa carta en su arte alternativo</p>
                    <div className="w-[250px] m-auto">
                    <CardView img={`/cards/P-003-9340.webp`} alt="Devora Cobardes" title="Carta Promo Devora Cobardes" rarity="Secreta Dorada"/>

                    </div>
                    <p className="mb-4 mt-10 leading-10 text-center">
                      Acompañamos en este gran evento  ¡No te lo pierdas! Prepárate para una experiencia inolvidable. 
                    </p>
                    <p className="mb-4 leading-10 text-center">
                    <b>¡Nos vemos en el campo de batalla!</b>
                    </p>
                </article>
                {/* <h2 className="uppercase font-bold text-4xl text-center text-indigo-500 mb-10">Calendario</h2>
                <section className="flex overflow-auto  ">
                  
                  <div className="w-[300px] p-6 bg-indigo-100 rounded mr-6 min-h-[200px] min-w-[300px]">
                    <div className="mb-6">Agosto 31, 2024</div>
                    <div className="uppercase text-2xl font-bold">Lugar</div>
                    <p className="text-indigo-500">Hidden TCG Store</p>
                    <p>Cl. 57 #23-27, Teusaquillo, Bogotá,</p>
                    <div className="flex flex-row mt-6">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[300px] p-6 bg-indigo-100 rounded mr-6 min-h-[200px] min-w-[300px]">
                    <div className="mb-6">Agosto 31, 2024</div>
                    <div className="uppercase text-2xl font-bold">Lugar</div>
                    <p className="text-indigo-500">Hidden TCG Store</p>
                    <p>Cl. 57 #23-27, Teusaquillo, Bogotá,</p>
                    <div className="flex flex-row mt-6">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[300px] p-6 bg-indigo-100 rounded mr-6 min-h-[200px] min-w-[300px]">
                    <div className="mb-6">Agosto 31, 2024</div>
                    <div className="uppercase text-2xl font-bold">Lugar</div>
                    <p className="text-indigo-500">Hidden TCG Store</p>
                    <p>Cl. 57 #23-27, Teusaquillo, Bogotá,</p>
                    <div className="flex flex-row mt-6">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[300px] p-6 bg-indigo-100 rounded mr-6 min-h-[200px] min-w-[300px]">
                    <div className="mb-6">Agosto 31, 2024</div>
                    <div className="uppercase text-2xl font-bold">Lugar</div>
                    <p className="text-indigo-500">Hidden TCG Store</p>
                    <p>Cl. 57 #23-27, Teusaquillo, Bogotá,</p>
                    <div className="flex flex-row mt-6">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[300px] p-6 bg-indigo-100 rounded mr-6 min-h-[200px] min-w-[300px]">
                    <div className="mb-6">Agosto 31, 2024</div>
                    <div className="uppercase text-2xl font-bold">Lugar</div>
                    <p className="text-indigo-500">Hidden TCG Store</p>
                    <p>Cl. 57 #23-27, Teusaquillo, Bogotá,</p>
                    <div className="flex flex-row mt-6">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[300px] p-6 bg-indigo-100 rounded mr-6 min-h-[200px] min-w-[300px]">
                    <div className="mb-6 font-bold">Agosto 31, 2024</div>
                    <div className="uppercase text-2xl font-bold">Lugar</div>
                    <p className="text-indigo-500">Hidden TCG Store</p>
                    <p>Cl. 57 #23-27, Teusaquillo, Bogotá,</p>
                    <div className="flex flex-row mt-6">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%F2lanzamiento'} target="_blank">
                        <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                </section> */}
            </div>
      </main>
  )
}
