import Image from "next/image";
import { fetchDataDeck } from "./Service/findDemoDeck.service";
import { CardView } from "@/components";

async function fetchDeck() {
    const data = await fetchDataDeck();
    return data;
}

const DemoDeck = async () => {

    const cards = await fetchDeck();

    return (
        <div className="container lg:px-20 md:px-20 py-20">
        <section className={'bg-[url("/products/me-demo.jpg")] bg-black bg-no-repeat bg-cover relative bg-center mx-10'}
                 style={{minHeight: 600}}
                
        >
            <Image width={200} height={200} src={'/products/MD1.png'} alt="Mazo Angeles" className="absolute lg:bottom-20 md:bottom-32 bottom-40 -left-10"/>
            <h1 className="absolute bottom-0 text-4xl py-4 w-full bg-indigo-500 text-center px-10">Mazo De Demostración - Primer Estallido</h1>
            <span className="absolute top-10 text-2xl py-2 bg-white text-indigo-500 px-4 text-center">Nov 2023</span>
        </section>

        <article className="mx-10 py-20 md:px-20 px-2 text-2xl text-gray-700 bg-white">

            <p className="mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
            <h2 className="text-4xl text-gray-900">Contenido:</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-6">
                <div className="mx-4">
                    <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">13 Unidades</h3>
                    <ul className="ml-4">
                        <li>1 Squirt</li>
                        <li>1 Puerta Gélida</li>
                        <li>1 Koshe el Campeon</li>
                        <li>1 Bruja Invocadora</li>
                        <li>1 Laion Semi-Dios</li>
                        <li>1 Vidente del Caos</li>
                        <li>1 Tendera de Municiones</li>
                        <li>1 Búho Nocturno</li>
                        <li>1 Segunda Pitonisa</li>
                        <li>1 Diablillo Reclutador</li>
                        <li>1 Peluche Triste</li>
                        <li>1 Hok el Oculto</li>
                        <li>1 Tzelathiel el Autonomo</li>
                        <li>1 Devora Cobardes</li>
                    </ul>
                </div>
                <div className="mx-4">
                    <h3 className="text-2xl bg-gray-500 text-white pl-4 my-2">2 Armas</h3>
                    <ul className="ml-4">
                        <li>1 Municion 7.0</li>
                        <li>1 Hacha de Fuego</li>
                    </ul>
                    <h3 className="text-2xl bg-purple-500 text-white pl-4 my-2">7 Conjuros</h3>
                    <ul className="ml-4">
                        <li>1 Disparo Lateral</li>
                        <li>1 Rompe Muros</li>
                        <li>1 Nictofobia</li>
                        <li>1 Asistencia Militar</li>
                        <li>1 Selección Divina</li>
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


export default DemoDeck