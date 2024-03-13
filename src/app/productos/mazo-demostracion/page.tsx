import Image from "next/image";
import { fetchDataDeck } from "./Service/findDemoDeck.service";
import { CardView, Title } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import '../products.scss';

export const metadata: Metadata = {
    title: 'Mazo De Demostración - Primer Estallido - Souls In Xtinction',
    description: 'Primer Estallido mazo de demostración del juego Souls In Xtinction',
    openGraph: {
        title: 'Mazo De Demostración - Primer Estallido - Souls In Xtinction',
        description: 'Primer Estallido mazo de demostración del juego Souls In Xtinction',
        url: 'https://soulsinxtinction.com/productos/mazo-demostracion',
        siteName: 'Mazo De Demostración Souls In Xtinction',
        images: [
            {
            url: 'https://soulsinxtinction.com/productos/mdr.jpg',
            width: 800,
            height: 600,
            alt: 'Mazo De Demostración Souls In Xtinction TCG',
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

const DemoDeck = async () => {

    const cards = await fetchDeck();

    return (
        <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

            <Title title="Mazo De Demostración" subtitle="Primer Estallido"/>

            <div className="bg-white px-10 py-10 mb-10">

                <article className="product px-4 py-6 bg-light-primary rounded mb-10">
                    <Image 
                        width={460} 
                        height={500} 
                        src={'/products/MD1.png'} 
                        alt="Caja Mazo Demostración Souls In Xtinction" 
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                        placeholder="blur" 
                        className="m-auto"
                    />
                    <div>
                        <p className="mb-6 leading-10">
                        El <strong><em>Mazo de Demostración - Primer estallido</em></strong> contiene todos los tipos de cartas, mecánicas y la mayoría de arquetipos de la primera temporada de <strong><em>Souls In Xtinction</em></strong>, además, viene con cartas extremadamente útiles y versátiles para armar cualquier tipo de estrategia que se te ocurra, no te pierdas la oportunidad de entrar en este maravilloso y competitivo universo de <strong><em>Souls In Xtinction</em></strong>.
                        </p>

                        <h4 className="text-gray-900 font-semibold">Mazo Primer Estallido contiene 27 Cartas:</h4>
                        <ul className="py-2 px-4">
                            <li>27 Comunes</li>
                            <li>1 Manual de inicio - Tablero</li>
                        </ul>
                    </div>
                </article>

                
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-3 md:col-span-2 sm:col-span-1 ml-3">Contenido:</h2>
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
                </section>
                
                
                <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-6 md:col-span-4 sm:col-span-1">Cartas:</h2>
                    <Link className="lg:col-span-6 md:col-span-4 sm:col-span-1 m-auto" href={'/cartas?&products=MD1#cards'}>
                        <button className="btn">Ver detalle de la lista de cartas</button>
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


export default DemoDeck