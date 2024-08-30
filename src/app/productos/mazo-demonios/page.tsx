import Image from "next/image";
import { fetchDataDeck } from "./Service/findDemonsDeck.service";
import { CardView, Title } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import '../products.scss';

export const metadata: Metadata = {
    title: 'Mazo Demonios - Arte de la Destrucción - Souls In Xtinction',
    description: 'Arte de la Destrucción mazo de demonios del juego Soul In Xtinction',
    openGraph: {
        title: 'Mazo Demonios - Arte de la Destrucción - Souls In Xtinction',
        description: 'Arte de la Destrucción mazo de demonios del juego Soul In Xtinction',
        url: 'https://soulsinxtinction.com/productos/mazo-demonios',
        siteName: 'Mazo Demonios Souls In Xtinction',
        images: [
            {
            url: 'https://soulsinxtinction.com/productos/mder.jpg',
            width: 800,
            height: 600,
            alt: 'Mazo Demonios Souls In Xtinction TCG',
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

const DemonsDeck = async () => {

    const cards = await fetchDeck();

    return (

        <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

            <Title title="Mazo Demonios" subtitle="Arte de la Destrucción"/>

                <div className="bg-white px-10 py-10 mb-10">

                    <article className="product px-4 py-6 bg-light-primary rounded mb-10">
                        <Image 
                            width={460} 
                            height={500} 
                            src={'/products/ME1.png'} 
                            alt="Caja Mazo Demonios - Souls In Xtinction" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur" 
                            className="m-auto"
                        />
                        <div>
                        <p className="mb-4 leading-10">
                            El Mazo <strong><em>Arte de la Destrucción</em></strong> está basado en el arquetipo de los Demonios, estos pequeños diablillos impacientes, solo quieren terminar los duelos de manera rápida y eficaz, al multiplicarse e invitar a otros a su juego de destrucción. Escasos de mecánicas pero capaces de regarse por todo el campo de juego y reducir las vidas oponentes a 0 en un par de turnos.
                        </p>
                        <p className="mb-6 leading-10">
                            Los Demonios son grandes amigos de los Sátiros los cuales pueden ser invocados al controlar ciertas cantidades de Demonios en particular y si esto sucede será el fin para tu oponente. Enfócate en ser lo suficientemente agresivo o lo suficientemente organizado para <strong><em>Bahamoot Aniquilador</em></strong> llegue y haga su trabajo correctamente.
                        </p>

                        <h4 className="text-gray-900 font-semibold">Mazo Arte de la Destrucción contiene 49 cartas:</h4>
                        <ul className="py-2 px-4">
                            <li>47 Comunes</li>
                            <li>2 Cartas Secretas</li>
                            <li>1 Manual de inicio</li>
                            <li>1 Ficha de Ataque</li>
                        </ul>
                        <p>Tienes la posibilidad de que en 1 de cada 6 mazos de Arte de la Destrucción encuentres 1 Bahamoot Aniquilador con <b>arte alternativo</b>.</p>
                        </div>
                    </article>

                    
                    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-16">
                        <h2 className="text-4xl text-gray-900 lg:col-span-3 md:col-span-2 sm:col-span-1 ml-3">Contenido:</h2>
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
                    </section>
                    
                    
                    <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                        <h2 className="text-4xl text-gray-900 lg:col-span-6 md:col-span-4 sm:col-span-1">Cartas:</h2>
                        <Link className="lg:col-span-6 md:col-span-4 sm:col-span-1 m-auto" href={'/cartas?&products=ME1#cards'}>
                            <button className="btn hover-primary">Ver detalle de la lista de cartas</button>
                        </Link>
                        {cards.map((card, i) => 
                        <div key={card.id} className="cursor-pointer">
                            <CardView img={`/cards/${card.code}-${card.id}.jpg`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} zoom={true}/>
                        </div>  
                        )}
                    </section>

                </div>
        </main>

        );

}


export default DemonsDeck