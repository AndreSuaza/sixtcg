import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: '¿Como Jugar? Soul In Xtinction Nuevo juego de cartas intercambiables ',
  description: 'Te enseñamos a Jugar Souls In Xtinction nuevo juego de cartas intercambiables.',
  openGraph: {
    title: '¿Como Jugar? Souls In Xtinction',
    description: 'Te enseñamos a Jugar Souls In Xtinction',
    url: 'https://soulsinxtinction.com/como-jugar',
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
    canonical: 'https://soulsinxtinction.com/como-jugar',
  }
}

async function HowToPlay () {
  return (
    <div className="bg-slate-50 text-gray-700 pb-10">
      <section className='bg-[url("/howtoplay/bakeneko.jpg")] w-full h-screen bg-black bg-no-repeat bg-cover relative md:bg-contain lg:bg-left bg-center text-white'>
          <div className="absolute w-full text-center right-0 lg:w-1/2 lg:mx-20 lg:top-1/3 md:top-1/3 top-2/3">
            <p className="uppercase stroke lg:text-6xl md:text-6xl text-2xl mb-10">Te dare un recorrido por Souls of Xtincion</p>
            <h1 className="mx-20 text-4xl stroke">Aprende Cómo jugar y reglas básicas.</h1>
          </div>
      </section>

      <div className="how-to-play md:mx-24 mx-4 text-2xl">
        <article className="mt-16">
          <h2 className="mb-6 text-gray-900 text-center">Para jugar Souls in Xtinction necesitas:</h2>          
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-6 pt-20">
              <div className="">
                <p className="text-center">Mazo principal de 40 cartas</p>
                <Image 
                    width={500} 
                    height={718} 
                    src={'/howtoplay/mazo-principal.png'} 
                    alt="Retiro mazo principal Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
              <div className="">
                <p className="text-center">Mazo Maná de 6 cartas</p>
                <Image 
                    width={500} 
                    height={718} 
                    src={'/howtoplay/mazo-mana.png'} 
                    alt="Retiro mazo Maná Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
              <div className="">
                <p className="text-center">Mazo Limbo de 0 a 6 cartas</p>
                <Image 
                    width={500} 
                    height={718} 
                    src={'/howtoplay/mazo-limbo.png'} 
                    alt="Retiro mazo limbo Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
              <div className="">
                <p className="text-center">1 Ficha de Ataque</p>
                <Image 
                    width={500} 
                    height={718} 
                    src={'/howtoplay/ficha-ataque.png'} 
                    alt="Ficha de Ataque Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
            </div>
            <div className="card-black">
              <p>Las cartas Limbo van cara arriba.</p>
              <p>Cada jugador comienza con 6 vidas y gana el jugador que logre reducir las vidas de su oponente a 0.</p>
              <p>Un jugador solo puede tener un máximo de 9 cartas en mano al finalizar el turno.</p>
              <p>Los jugadores lanzan una moneda para decidir quién comienza con la ficha de Ataque.</p>
              <p>Cada jugador roba 6 cartas de su mazo principal y solo una vez puede devolver las cartas que desee al Mazo, barajar y robar la misma cantidad.</p>
              <p>Un mazo solo puede tener un máximo de 2 copias por carta.</p>
            </div>
          </div>
          <div>
            <p className="text-center mt-16 pb-6 text-4xl">
            Ubica las cartas en sus respectivas zonas en el juego.
            </p>
            <Image 
                    width={822 } 
                    height={426} 
                    src={'/howtoplay/playmat-video.png'} 
                    alt="Tablero Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
              />

            <p className="text-center mt-16 text-4xl">
              Hay 4 <b>Fases</b> durante cada turno:
            </p>  
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="card-black">
                <p><b>Fase de Maná:</b> Cada jugador coloca un maná de su mazo de maná y pone todo su maná como disponible.</p>
                <p><b>Fase de Robo:</b> Cada jugador roba una carta de su Mazo principal.</p>
                <p><b>Fase Principal:</b> En esta fase cada jugador puede realizar acciones empezando por el jugador de la Ficha de Ataque como:</p>
                <div className="px-6 ms-6 mb-6">
                <ul className="list-disc">
                  <li>Jugar cartas / Activar efectos</li>
                  <li>Responder a las cartas del oponente </li>
                  <li>No hacer nada, pasar la acción.</li>
                </ul>
                </div>
                <p>El jugador que controle la ficha de ataque puede realizar la acción de <b>entrar en combate</b> 1 vez por turno.</p>
                <p><b>Fase Final:</b> Se resuelven efectos que se activen en esta fase y se cambia el control de la ficha de Ataque al otro jugador.</p>
              </div>
              <div className="pt-10">
              <Image 
                    width={628} 
                    height={222} 
                    src={'/howtoplay/fase-mana-1.png'} 
                    alt="Imagen Poner Mana Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              <Image 
                    width={628} 
                    height={296} 
                    src={'/howtoplay/fase-mana-2.png'} 
                    alt="Imagen de la Fase de Mana de Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
    
            </div>
            <h2 className="mb-6 text-gray-900 text-center my-6 pt-10">Descripcion de la cartas</h2>  
            <Image 
                    width={885} 
                    height={775} 
                    src={'/howtoplay/carta-ds.png'} 
                    alt="Componentes de una carta Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className=" my-6 m-auto"
                />

            <h2 className="mb-6 text-gray-900 text-center my-6 pt-10">Tipos de Cartas:</h2>  
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-6 mt-10">
              <div className="">
                <Image 
                    width={460} 
                    height={500} 
                    src={'/howtoplay/unidad.png'} 
                    alt="Carta de Unidad Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
              <div className="">
                <Image 
                    width={460} 
                    height={500} 
                    src={'/howtoplay/conjuro.png'} 
                    alt="Carta de Conjuro Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
              <div className="">
                <Image 
                    width={460} 
                    height={500} 
                    src={'/howtoplay/arma.png'} 
                    alt="Carta de Arma Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
              <div className="">
                <Image 
                    width={460} 
                    height={500} 
                    src={'/howtoplay/ente.png'} 
                    alt="Carta de Ente Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                />
              </div>
            </div>
          </div>
          <h2 className="mb-6 text-gray-900 text-center my-6 pt-10">Acciones de la fase principal:</h2>  
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="card-black mb-20">
              <p><b>Jugar una carta:</b> Para jugar una carta Debes pagar el coste de la carta con el maná disponible que tengas. <i className="text-indigo-500">Fig 1. Pago de Mana</i></p>
              <p><b>Responder a una carta oponente o efecto:</b> Cuando un jugador activa un Conjuro o un efecto de una carta, el jugador oponente puede responder con cartas de Conjuro o efectos “Rápido” que irán a una Fila de Activación donde resolverán las cartas y efectos desde la última que se activó hasta la primera.</p>
              <p><b>Pasar la acción:</b> Luego de que un jugador juegue una carta, resuelva un efecto o pase la acción, el oponente podrá realizar la acción que guste. Si los dos jugadores pasan la acción, automáticamente pasan a Fase final.</p>
              <p><b>Entrar en Combate:</b> El jugador con la Ficha de Ataque puede entrar en combate moviendo unidades de su Campo a la Zona de Combate, esto se llama “Paso de Ataque” <i className="text-indigo-500">Fig 2. Paso de Ataque</i>.</p>
              <p>Sigue el <b>“Paso de bloqueo”</b>, el jugador defensor ubica unidades de su campo frente a las unidades que desea Bloquear <i className="text-indigo-500">Fig 3. Paso de bloqueo</i>.</p>
              <p><b>“Paso de juego Rápido”</b> cada jugador puede activar Conjuros y efectos <b>“Rápido”</b> empezando por el jugador Atacante.</p>
              <p><b>“Paso de Daños”</b> los ataques se resuelven de izquierda a derecha y se van calculando los daños a las vidas del jugador defensor.</p>
            </div> 
            <div>
            <Image 
                    width={552} 
                    height={231} 
                    src={'/howtoplay/pago-mana.png'} 
                    alt="Como se paga el maná en  Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 m-auto"
                /> 
            <div className="text-center">Fig 1.  (Pago de Mana)</div> 
            <Image 
                    width={662} 
                    height={374} 
                    src={'/howtoplay/ataque.png'} 
                    alt="Paso de ataque en Souls In Xtinction" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur" 
                    className="my-6 pt-10 m-auto"
                />
            <div className="text-center">Fig 2. (Paso de Ataque)</div> 
            <Image 
                  width={662} 
                  height={374} 
                  src={'/howtoplay/bloqueo.png'} 
                  alt="Paso de bloqueo en Souls In Xtinction" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                  placeholder="blur" 
                  className="my-6 pt-10 m-auto"
              /> 
            <div className="text-center">Fig 3. (Paso de bloqueo)</div>     
            </div>
          </div>  
          <h2 className="mb-6 text-gray-900 text-center my-6">Reglas Generales</h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 pb-10">
            <div className="card-black mb-0">
              <p>En el Campo solo puedes tener hasta 6 cartas de Unidades/Ente, si tienes el campo lleno puedes enviar una Unidad/Ente al cementerio para jugar otra.</p>
              <p>Puedes equipar cartas de Arma a cualquier unidad en ambos campos.</p>
              <p>Cada Unidad puede tener máximo un Arma, si se le equipa un Arma nueva perderá la que tenía equipada enviándola al cementerio.</p>
              <p>Las Unidades con defensa 0 no pueden Bloquear.</p>
            </div>
            <div className="card-black mb-0">
              <p>Las unidades quedan dañadas solo en turno en curso.</p>
              <p>Si la Defensa de una Unidad llega a 0 por Daño de ataque o efecto de una carta, se destruye y va al cementerio</p>
              <p>Las cartas desintegradas se colocan en el Halo boca abajo.</p>
              <p>Las armas se equipan debajo de la Unidad.</p>
              <p>Para una vista detallada de las reglas avanzadas del juego, visita:</p>
            </div>
          </div>
          
          <Link href={"/reglas"} target="_blank" title="Reglas avanzadas Souls In Xtinction">
          <p className="mb-0">Si ya dominaste las reglas básicas, es hora de llevar tu experiencia al siguiente nivel. Te invitamos a descubrir las <span className="text-primary">reglas avanzadas</span> que te permitirán explorar nuevas estrategias, habilidades y tácticas que transformarán tu manera de jugar. Sumérgete en el corazón de Souls In Xtinction y descubre todo lo que necesitas para convertirte en un verdadero maestro del juego.</p>
          </Link>
          
        </article>
      </div>
    </div>
  )
}

export default HowToPlay