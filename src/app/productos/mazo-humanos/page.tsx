import Image from "next/image";
import { fetchDataDeck } from "./Service/findHumansDeck.service";
import { CardView } from "@/components";

async function fetchDeck() {
    const data = await fetchDataDeck();
    return data;
}

const HumansDeck = async () => {

    const cards = await fetchDeck();

    return (
        <div className="container lg:px-20 md:px-20 py-20">
        <section className={'bg-[url("/products/me-humano.jpg")] bg-black bg-no-repeat bg-cover relative bg-center mx-10'}
                 style={{minHeight: 600}}
                
        >
            <Image width={200} height={200} src={'/products/ME4.png'} alt="Mazo Angeles" className="absolute lg:bottom-20 md:bottom-32 bottom-40 -left-10"/>
            <h1 className="absolute bottom-0 text-4xl py-4 w-full bg-indigo-500 text-center px-10">Mazo Humanos - Depliegue de la Armada</h1>
            <span className="absolute top-10 text-2xl py-2 bg-white text-indigo-500 px-4 text-center">Nov 2023</span>
        </section>

        <article className="mx-10 py-10 md:px-20 px-2 text-2xl text-gray-700 bg-white">

            <div className="px-4 py-6 bg-indigo-100 rounded mb-10">
                <p className="mb-4 leading-10">
                    El Mazo <b><i>Despliegue de la Armada</i></b> está basado en el arquetipo de los Humanos y el mas completo set de Armas para que tomes ventaja de tus oponentes, al usar mecánicas como equipar Armas y usar sus efectos instantáneos, también deberás saber administrar tus recursos para alzarte con la victoria. 
                </p>
                <p className="mb-6 leading-10">
                    Los Humanos son seres con poca fuerza pero bastante hábiles para tener un arsenal de Armas a su disposición, con las cuales tomarán ventaja sobre otras cartas en Souls In Xtinction, demuestra que sabes dominar el rumbo del duelo para que puedas empezar a equipar tus Armas más poderosas, este es el único Mazo que te trae 14 Armas para que puedas empaparte de esta mecánica que requiere un nivel de habilidad superior. 
                </p>

                <h4 className="text-gray-900 font-semibold">Mazo Despliegue de la Armada contiene 48 cartas:</h4>
                <ul className="py-2 px-4">
                    <li>46 Comunes</li>
                    <li>2 Cartas Secretas</li>
                    <li>1 Manual de inicio - Tablero</li>
                </ul>
            </div>

            <h2 className="text-4xl text-gray-900">Contenido:</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-6">
                <div className="mx-4">
                    <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">24 Unidades</h3>
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
                        <li>2 "Malir Sal"</li>
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
            </div>
            
            <h2 className="text-4xl text-gray-900">Cartas:</h2>
            <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-8 justify-items-center">
            {cards.map((card, i) => 
              <div key={card.id} className="cursor-pointer">
                <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`}/>
              </div>  
            )}
            </section>
        </article>
        </div>
        );

}


export default HumansDeck