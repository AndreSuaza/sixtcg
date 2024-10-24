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
          url: 'https://soulsinxtinction.com/events/lanzamiento-metadata.jpg',
          width: 800,
          height: 1200,
          alt: 'Gran torneo de lanzamiento Souls In Xtinction',
          }
      ],
      locale: 'en_ES',
      type: 'website',
  },
}

export default function LanzamientoMazos() {
  return (
    <main className="bg-gray-50 md:px-20 md:text-2xl text-xl text-gray-700 pb-10">
            <div className="lg:w-5/6 md:w-screen mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 mb-20">
                  <Image 
                      width={600 } 
                      height={837} 
                      src={'/events/lanzamiento-me-p.jpg'} 
                      alt="Lanzamiento Mazos Estructurados Souls In Xtinction" 
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                      placeholder="blur" 
                      className=""
                  />
                  <div className="text-center mt-4 pt-20">
                    <div className="mb-20 text-primary font-bold uppercase">Lanzamientos</div>
                    <h1 className="font-bold text-gray-700 px-10 leading-normal mb-20">Evento de Mazos Estructurados Conquista y Sobrevive</h1>
                    <p className="text-lg capitalize">¡Prepárate para la Batalla Definitiva en Souls In Xtinction!</p>
                    <div className="flex flex-row justify-center gap-4 mt-20">
                      <Link href={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.soulsinxtinction.com%2Feventos%lanzamiento-mazos-estructurados'} target="_blank">
                        <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
                      </Link>
                    </div>
                  </div>
                </div>
                <article className="lg:w-4/5 md:w-auto py-6 rounded mb-10 font-sans text-xl px-4">
                    <div>
                      <p className="mb-4 leading-10">
                      ¿Estás listo para enfrentar la aniquilación? Únete al emocionante Evento de Mazos Estructurados de Souls In Xtinction, donde la estrategia es tu mejor arma. Pon a prueba tu habilidad con poderosos mazos preconstruidos y demuestra que tienes lo necesario para sobrevivir en este mundo devastado.</p>
                      <p className="mb-4 leading-10">
                      ¡Conquista con mazos balanceados! Cada participante recibirá un mazo estructurado para competir en una serie de duelos intensos. No necesitas preocuparte por la creación de tu mazo, ¡la clave está en cómo lo dominas!</p>
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
                    <h2 className="mb-6 py-10 text-gray-900 text-center text-6xl uppercase ">Premios Épicos</h2> 

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="m-4">
                          <p className="text-center mb-6"><b>Carta exclusiva Prime Wenddygo de Campeón para el ganador del evento.</b></p>
                          <div className="w-[250px] m-auto">
                            <CardView img={`/cards/PC-001-0006.jpg`} alt="Prime Wenddygo de campeón" title="Carta Promo Prime Wenddygo de campeón" rarity="Secreta Dorada"/>
                          </div>
                        </div>
                        <div className="m-4">
                          <p className="text-center mb-6"><b>7 cartas especiales de Prime Wenddygo para los jugadores del Top 8.</b></p>
                          <div className="w-[250px] m-auto">
                            <CardView img={`/cards/P-001-0006.jpg`} alt="Prime Wenddygo" title="Carta Promo Prime Wenddygo" rarity="Secreta"/>
                          </div>
                        </div>
                    </div>
                    <p className="mb-4 mt-10 leading-10 text-center">
                    Enfréntate a oponentes de todos los niveles, desde principiantes hasta veteranos. ¡Todos tienen una oportunidad de ganar!
                    </p>
                    <p className="mb-4 leading-10 text-center">
                    ¡No pierdas la oportunidad de mostrar tu dominio en Souls In Xtinction!
                    </p>
                    </div>
                </article>
            </div>
      </main>
  )
}
