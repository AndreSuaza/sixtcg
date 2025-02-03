import Image from "next/image";
import { fetchDataDeck } from "./Service/findAngelsDeck.service";
import { CardView, Title } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import '../products.scss';

export const metadata: Metadata = {
    title: 'Mazo Angeles - Amanecer Celestial - Souls In Xtinction',
    description: 'Amanecer Celestial mazo de angeles del juego Souls In Xtinction',
    openGraph: {
        title: 'Mazo Angeles - Amanecer Celestial - Souls In Xtinction',
        description: 'Amanecer Celestial mazo de angeles del juego Souls In Xtinction',
        url: 'https://soulsinxtinction.com/productos/mazo-angeles',
        siteName: 'Mazo Angeles Souls In Xtinction',
        images: [
            {
            url: 'https://soulsinxtinction.com/og.webp',
            width: 800,
            height: 600,
            alt: 'Mazo Angeles Souls In Xtinction TCG',
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

const AngelsDeck = async () => {

    const cards = await fetchDeck();

    return (
        
        <main className="bg-[url('/bg-cardlist.webp')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

            <Title title="Mazo Angeles" subtitle="Amanecer Celestial"/>

                <div className="bg-white px-10 py-10 mb-10">

                    <article className="product px-4 py-6 bg-light-primary rounded mb-10">
                        <Image 
                            width={460} 
                            height={500} 
                            src={'/products/ME2S.webp'} 
                            alt="Caja Mazo Angeles Souls In Xtinction" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur" 
                            className="m-auto"
                        />
                        <div>
                        <p className="mb-4 leading-10">
                            El Mazo <strong><em>Amanecer Celestial</em></strong> está basado en el arquetipo de los Ángeles, los cuales tienen las habilidades y conjuros más poderosos de Souls In Xtinction. Usa sus habilidades para Retornar a las unidades más problemáticas de tu oponente y si no es suficiente, destruirlas fácilmente.
                        </p>
                        <p className="mb-6 leading-10">
                            Los Ángeles son un arquetipo con grandes habilidades y poderosos conjuros. Tienen una mecánica muy especial como es Retornar cartas de cualquier parte del juego a la mano o tu mazo Limbo y si sabes combinar su estrategia puedes desintegrar lo que desees, mientras logras bajar al uno de los ángeles más enigmáticos como lo es <strong><em>Zadkiel Misericordioso</em></strong>, el cual pondrá un fin a los duelos.
                        </p>

                        <h4 className="text-gray-900 font-semibold">Mazo Amanecer Celestial contiene 48 cartas:</h4>
                        <ul className="py-2 px-4">
                            <li>46 Comunes</li>
                            <li>2 Cartas Secretas</li>
                            <li>1 Manual de inicio</li>
                            <li>1 Ficha de Ataque</li>
                        </ul>
                        <p>Tienes la posibilidad de que en 1 de cada 6 mazos de Amanecer Celestial encuentres 1 Aleksandra con <b>arte alternativo</b>.</p>
                        </div>
                    </article>

                    
                    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-16">
                        <h2 className="text-4xl text-gray-900 lg:col-span-3 md:col-span-2 sm:col-span-1 ml-3">Contenido:</h2>
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
                    </section>
                    
                    
                    <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                        <h2 className="text-4xl text-gray-900 lg:col-span-6 md:col-span-4 sm:col-span-1">Cartas:</h2>
                        <Link className="lg:col-span-6 md:col-span-4 sm:col-span-1 m-auto" href={'/cartas?&products=ME2#cards'}>
                            <button className="btn hover-primary">Ver detalle de la lista de cartas</button>
                        </Link>
                        {cards.map((card, i) => 
                        <div key={card.id} className="cursor-pointer">
                            <CardView img={`/cards/${card.code}-${card.id}.webp`} alt={card.name} title={`Click para ver al detalle a ${card.name}`} zoom={true} rarity={card.rarity}/>
                        </div>  
                        )}
                    </section>

                </div>
        </main>

        );

}


export default AngelsDeck