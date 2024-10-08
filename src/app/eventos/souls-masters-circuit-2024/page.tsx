import { CardView } from "@/components";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Souls Masters Circuit 2024',
  description: "Mas de 1'000.000 en premios",
  openGraph: {
      title: 'Souls Masters Circuit 2024',
      description: "Mas de 1'000.000 en premios",
      url: 'https://soulsinxtinction.com/eventos/souls-masters-circuit-2024',
      siteName: 'Inicio del competitivo en Souls In Xtinction',
      images: [
          {
          url: 'https://soulsinxtinction.com/events/souls-masters-circuit-2024.jpg',
          width: 800,
          height: 800,
          alt: 'Souls Masters Circuit 2024',
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
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 mb-10">
                  <Image 
                      width={800} 
                      height={800} 
                      src={'/events/souls-masters-circuit-2024.jpg'} 
                      alt="Souls Masters Circuit 2024" 
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                      placeholder="blur" 
                      className=""
                  />
                  <div className="text-center mt-4 pt-10">
                    <div className="mb-10 text-primary font-bold uppercase">Llega el Souls Master Circuit</div>
                    <h1 className="font-bold text-gray-700 px-10 leading-normal mb-10">El Inicio del Competitivo de Souls In Xtinction</h1>
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
                      La espera ha terminado. <i>Souls In Xtinction</i> entra oficialmente en la arena competitiva con el lanzamiento del <b>Souls Master Circuit</b>, un torneo épico donde los mejores jugadores se enfrentarán por el honor y la supremacía. Este evento no solo es una competencia, sino el primer paso para consolidar a <i>Souls In Xtinction</i> como un fenómeno en el universo de los juegos de cartas coleccionables.
                      </p>
                      <p className="mb-4 leading-10">
                      El <b>Souls Master Circuit</b> es más que un torneo, es una experiencia que pondrá a prueba la habilidad, la estrategia y la capacidad de los jugadores para adaptarse a las mecánicas únicas del juego. En este torneo, los participantes tendrán la oportunidad de demostrar su destreza con las cartas más poderosas, usando combinaciones letales y elaboradas para superar a sus oponentes.
                      </p>
                      
                      <p className="mb-4 leading-10 font-bold">¿Eres tú el próximo Soul Master?</p>
                      <p className="mb-4 leading-10">El primer lugar se llevará un premio en efectivo de <b>$1,000,000 de pesos en efectivo.</b> Además, habrá premios especiales para los jugadores que logren posicionarse en el top del evento. Con cada victoria, los jugadores acumularán puntos en el ranking global, lo que les permitirá competir por grandes recompensas y el prestigioso título de Soul Master.</p>
                      <h3 className="text-2xl my-6 font-bold uppercase">¿Cuándo y dónde?</h3>
                      
                      <p><b>Dia:</b> 1 Diciembre 2024 </p>
                      <p><b>Lugar:</b> TCG Collectibles, Cra. 13a #127-8 en la Ciudad de Bogotá.</p>
                      <p><b>Costo:</b> $48:000 </p>
                      <p className="mb-4 "><b>Hora:</b>  10:00 am</p>
                      
                      <p className="mb-4 leading-10"><b>El Souls Master Circuit</b> será el escenario perfecto para que los jugadores demuestren sus habilidades y se enfrenten a otros guerreros de almas en un campo de batalla épico. Prepárate para el inicio de esta nueva era del competitivo de <i>Souls In Xtinction.</i></p>
                      <p className="mb-4 leading-10"><b>¡Inscripciones abiertas ahora!</b> No pierdas la oportunidad de ser parte de este histórico evento que definirá el futuro de los jugadores más legendarios.</p>
                      
                    </div>

                </article>
            </div>
      </main>
  )
}
