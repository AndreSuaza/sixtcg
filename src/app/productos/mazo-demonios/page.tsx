import Image from "next/image";
import { fetchDataDeck } from "./Service/findDemonsDeck.service";
import { CardView } from "@/components";

async function fetchDeck() {
    const data = await fetchDataDeck();
    return data;
}

const DemonsDeck = async () => {

    const cards = await fetchDeck();

    return (
        <div className="container lg:px-20 md:px-20 py-20">
        <section className={'bg-[url("/products/me-demonio.jpg")] bg-black bg-no-repeat bg-cover relative bg-center mx-10'}
                 style={{minHeight: 600}}
                
        >
            <Image width={200} height={200} src={'/products/ME1.png'} alt="Mazo Angeles" className="absolute lg:bottom-20 md:bottom-32 bottom-40 -left-10"/>
            <h1 className="absolute bottom-0 text-4xl py-4 w-full bg-indigo-500 text-center px-10">Mazo Demonios - Arte de la Destrucción</h1>
            <span className="absolute top-10 text-2xl py-2 bg-white text-indigo-500 px-4 text-center">Nov 2023</span>
        </section>

        <article className="mx-10 py-20 md:px-20 px-2 text-2xl text-gray-700 bg-white">

            <p className="mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
            <h2 className="text-4xl text-gray-900">Contenido:</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-6">
                <div className="mx-4">
                    <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">24 Unidades</h3>
                    <ul className="ml-4">
                        <li>2 DefensOgro</li>
                        <li>2 Bakeneko</li>
                        <li>2 DemoniOgro</li>
                        <li>2 Agares</li>
                        <li>1 Sepulturero jubilado</li>
                        <li>2 SaiPaimon</li>
                        <li>2 Duo Diablillos</li>
                        <li>1 Fantasma merodeador</li>
                        <li>2 Semyazza</li>
                        <li>1 Imp Redimido</li>
                        <li>1 Predicador del Pecado</li>
                        <li>1 Bracco</li>
                        <li>1 Demonio Pastelero</li>
                        <li>2 Bahamoot Aniquilador</li>
                        <li>1 Sátiro de la Triada</li>
                        <li>1 Mammon</li>
                    </ul>
                </div>
                <div className="mx-4">
                    <h3 className="text-2xl bg-gray-500 text-white pl-4 my-2">3 Arma</h3>
                    <ul className="ml-4">
                        <li>2 Posesión Demoníaca</li>
                        <li>1 Granada de Goma</li>
                    </ul>
                    <h3 className="text-2xl bg-purple-500 text-white pl-4 my-2">15 Conjuros</h3>
                    <ul className="ml-4">
                    <li>2 Trueno a las 300</li>
                    <li>2 Escape del infierno</li>
                    <li>2 Grieta Infernal</li>
                    <li>1 Escudos gemelos</li>
                    <li>2 Sigilo de Satanás</li>
                    <li>2 Sed Demoníaca</li>
                    <li>1 Pastel Podrido</li>
                    <li>1 Purificador de Almas</li>
                    <li>2 Pentagrama invertido</li>
                    </ul>
                    
                </div>
                <div className="mx-4">
                    <h3 className="text-2xl bg-black text-white pl-4 my-2">6 Maná</h3>
                    <ul className="ml-4">
                        <li>1 Maná Alterno</li>
                        <li>5 Maná</li>
                    </ul>
                    <h3 className="text-2xl bg-sky-500 text-white pl-4 my-2">1 Ficha</h3>
                    <ul className="ml-4">
                        <li>1 Duo Diablillo</li>
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


export default DemonsDeck