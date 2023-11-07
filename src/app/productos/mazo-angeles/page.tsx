import Image from "next/image";
import { fetchDataDeck } from "./Service/findAngelsDeck.service";
import { CardView } from "@/components";

async function fetchDeck() {
    const data = await fetchDataDeck();
    return data;
}

const AngelsDeck = async () => {

    const cards = await fetchDeck();

    return (
        <div className="container lg:px-20 md:px-20 py-20">
        <section className={'bg-[url("/products/me-angel.jpg")] bg-black bg-no-repeat bg-cover relative bg-center mx-10'}
                 style={{minHeight: 600}}
                
        >
            <Image width={200} height={200} src={'/products/ME2.png'} alt="Mazo Angeles" className="absolute lg:bottom-20 md:bottom-32 bottom-40 -left-10"/>
            <h1 className="absolute bottom-0 text-4xl py-4 w-full bg-indigo-500 text-center px-10">Mazo Angeles - Amanecer Celestial</h1>
            <span className="absolute top-10 text-2xl py-2 bg-white text-indigo-500 px-4 text-center">Nov 2023</span>
        </section>

        <article className="mx-10 py-20 md:px-20 px-2 text-2xl text-gray-700 bg-white">

            <p className="mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
            <h2 className="text-4xl text-gray-900">Contenido:</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-6">
                <div className="mx-4">
                    <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">25 Unidades</h3>
                    <ul className="ml-4">
                        <li>2 Rocky</li>
                        <li>2 Ginger</li>
                        <li>2 Protector del Amanecer</li>
                        <li>2 Piuressa</li>
                        <li>2 Ángel Visionario</li>
                        <li>1 Fantasma merodeador</li>
                        <li>2 Varvara</li>
                        <li>2 Aleksandra</li>
                        <li>1 Imp Redimido</li>
                        <li>1 Avispa Enfurecida</li>
                        <li>2 Fenrir</li>
                        <li>1 Bracco</li>
                        <li>2 Aleksandra Coronada</li>
                        <li>2 Zadkiel Misericordioso</li>
                        <li>1 Guardián de Apoyo</li>
                    </ul>
                </div>
                <div className="mx-4">
                    <h3 className="text-2xl bg-gray-500 text-white pl-4 my-2">3 Arma</h3>
                    <ul className="ml-4">
                        <li>2 Alas Sagradas</li>
                        <li>1 Granada de Goma</li>
                    </ul>
                    <h3 className="text-2xl bg-purple-500 text-white pl-4 my-2">14 Conjuros</h3>
                    <ul className="ml-4">
                        <li>2 Volviendo a Casa</li>
                        <li>2 Volando al Más Allá</li>
                        <li>2 Receta de Brujas</li>
                        <li>1 Expulsión Divina</li>
                        <li>2 Llamado de Fe</li>
                        <li>1 Sudbury Basin</li>
                        <li>1 Latigazo a la Tropa</li>
                        <li>2 Condena Celestial</li>
                        <li>1 Purificador de Almas</li>
                    </ul>
                    
                </div>
                <div className="mx-4">
                    <h3 className="text-2xl bg-black text-white pl-4 my-2">6 Maná</h3>
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


export default AngelsDeck