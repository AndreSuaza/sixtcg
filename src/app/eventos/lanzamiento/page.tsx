import { CardView, Title } from "@/components";
import Image from "next/image";

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
                            className="m-auto"
                        />
                    <article className="px-10 py-6 rounded mb-10 text-3xl">
                        <div>
                          <p className="mb-4 leading-10">
                          ¡Te invitamos al gran lanzamiento de <b>Souls In Xtinction</b>! Un nuevo juego de cartas intercambiables donde la emoción, la estrategia y la aventura se unen en una experiencia épica.
                          </p>
                          <p className="mb-4 leading-10">
                          Por participar recibes un mazo de demostración.
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
                        <h2 className="mb-6 py-10 text-gray-900 text-center text-6xl uppercase ">puedes obtener la carta:</h2> 
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
