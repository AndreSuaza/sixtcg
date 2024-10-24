import Image from "next/image";
import { fetchDataDeck } from "./Service/findHumansDeck.service";
import { CardView, Title } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import '../products.scss';

export const metadata: Metadata = {
    title: 'Mazo Humanos - Depliegue de la Armada - Souls In Xtinction',
    description: 'Depliegue de la Armada mazo de humanos del juego Souls In Xtinction',
    openGraph: {
      title: 'Mazo Humanos - Depliegue de la Armada - Souls In Xtinction',
      description: 'Depliegue de la Armada mazo de humanos del juego Souls In Xtinction',
      url: 'https://soulsinxtinction.com/productos/mazo-humanos',
      siteName: 'Souls In Xtinction',
      images: [
        {
          url: 'https://soulsinxtinction.com/og.jpg',
          width: 800,
          height: 600,
          alt: 'Mazo Humanos Souls In Xtinction TCG',
        }
      ],
      locale: 'en_ES',
      type: 'website',
    },
}

async function fetchDeck() {
    const data = await fetchDataDeck();
    return data;
}

const HumansDeck = async () => {

    const cards = await fetchDeck();

    return (
       
    <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

        <Title title="Mazo Humanos" subtitle="Depliegue de la Armada"/>

            <div className="bg-white px-10 py-10 mb-10">

                <article className="product px-4 py-6 bg-light-primary rounded mb-10">
                    <Image 
                        width={460} 
                        height={500} 
                        src={'/products/ME4.png'} 
                        alt="Caja Mazo Humanos Souls In Xtinction" 
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                        placeholder="blur" 
                        className="m-auto"
                    />
                    <div>
                    <p className="mb-4 leading-10">
                        El Mazo <strong><em>Despliegue de la Armada</em></strong> está basado en el arquetipo de los Humanos y el mas completo set de Armas para que tomes ventaja de tus oponentes, al usar mecánicas como equipar Armas y usar sus efectos instantáneos, también deberás saber administrar tus recursos para alzarte con la victoria. 
                    </p>
                    <p className="mb-6 leading-10">
                        Los Humanos son seres con poca fuerza pero bastante hábiles para tener un arsenal de Armas a su disposición, con las cuales tomarán ventaja sobre otras cartas en Souls In Xtinction, demuestra que sabes dominar el rumbo del duelo para que puedas empezar a equipar tus Armas más poderosas, este es el único Mazo que te trae 14 Armas para que puedas empaparte de esta mecánica que requiere un nivel de habilidad superior. 
                    </p>

                    <h4 className="text-gray-900 font-semibold">Mazo Despliegue de la Armada contiene 48 cartas:</h4>
                    <ul className="py-2 px-4">
                        <li>46 Comunes</li>
                        <li>2 Cartas Secretas</li>
                        <li>1 Manual de inicio</li>
                        <li>1 Ficha de Ataque</li>
                    </ul>
                    <p>Tienes la posibilidad de que en 1 de cada 6 mazos de Despliegue de la Armada encuentres 1 Ariete con <b>arte alternativo</b>.</p>
                    </div>
                </article>

                
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-3 md:col-span-2 sm:col-span-1 ml-3">Contenido:</h2>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">21 Unidades</h3>
                        <ul className="ml-4">
                            <li>2 Shadu el Aprendiz</li>
                            <li>2 Hachikō</li>
                            <li>2 Vigilante Dormido</li>
                            <li>1 Sepulturero jubilado</li>
                            <li>2 Herrero Mecánico</li>
                            <li>1 Cactus Pinchador</li>
                            <li>2 Betty Reid</li>
                            <li>1 Oso Guardián</li>
                            <li>1 Predicador del Pecado</li>
                            <li>1 Ebrio del Bosque</li>
                            <li>1 Demonio Pastelero</li>
                            <li>2 Sadhu Armormaster</li>
                            <li>2 Excavador Alemán</li>
                            <li>1 Barachiel</li>
                        </ul>
                    </div>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-gray-500 text-white pl-4 my-2">14 Armas</h3>
                        <ul className="ml-4">
                            <li>2 Cuchillo de papel</li>
                            <li>2 Manzana del Pecado</li>
                            <li>2 Kasuga</li>
                            <li>2 Chaleco Bomba</li>
                            <li>1 Escudo de Plasma</li>
                            <li>2 Equipo básico SE-03</li>
                            <li>2 Ariete</li>
                            <li>1 Mark Ex-303</li>
                        </ul>
                        <h3 className="text-2xl bg-purple-500 text-white pl-4 my-2">7 Conjuros</h3>
                        <ul className="ml-4">
                            <li>2 Implicación cuántica</li>
                            <li>2 Lo Deje Por Aquí!</li>
                            <li>1 Escudos gemelos</li>
                            <li>1 Pastel Podrido</li>
                            <li>1 Purificador de Almas</li>
                        </ul>
                        
                    </div>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-black text-white pl-4 my-2">6 Manás</h3>
                        <ul className="ml-4">
                            <li>1 Maná Alterno</li>
                            <li>5 Maná</li>
                        </ul>
                    </div>
                </section>
                
                
                <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-6 md:col-span-4 sm:col-span-1">Cartas:</h2>
                    <Link className="lg:col-span-6 md:col-span-4 sm:col-span-1 m-auto" href={'/cartas?&products=ME4#cards'}>
                        <button className="btn">Ver detalle de la lista de cartas</button>
                    </Link>
                    {cards.map((card, i) => 
                    <div key={card.id} className="cursor-pointer">
                        <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} zoom={true} rarity={card.rarity}/>
                    </div>  
                    )}
                </section>

            </div>
    </main>

    );

}


export default HumansDeck