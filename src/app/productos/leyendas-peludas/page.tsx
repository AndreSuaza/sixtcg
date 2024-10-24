import Image from "next/image";
import { fetchDataDeck } from "./Service/findLeyendasPeludas.service";
import { CardView, Title } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import '../products.scss';

export const metadata: Metadata = {
    title: 'Producto Especial Leyendas Peludas - Souls In Xtinction',
    description: 'Estas bestias, conocidas como "Leyendas Peludas", emergen en tiempos de caos para proteger el equilibrio entre los mundos.',
    openGraph: {
        title: 'Producto Especial - Leyendas Peludas - Souls In Xtinction',
        description: 'Estas bestias, conocidas como "Leyendas Peludas", emergen en tiempos de caos para proteger el equilibrio entre los mundos.',
        url: 'https://soulsinxtinction.com/productos/leyendas-peludas',
        siteName: 'Leyendas Peludas',
        images: [
            {
            url: 'https://soulsinxtinction.com/og.jpg',
            width: 800,
            height: 600,
            alt: 'Leyendas Peludas Souls In Xtinction TCG',
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
        
        <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

            <Title title="Leyendas Peludas" subtitle="Producto Especial"/>

                <div className="bg-white px-10 py-10 mb-10">

                    <article className="product px-4 py-6 bg-light-primary rounded mb-10">
                        <Image 
                            width={500} 
                            height={407} 
                            src={'/products/LP.png'} 
                            alt="Caja Mazo Angeles Souls In Xtinction" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur" 
                            className="m-auto"
                        />
                        <div>
                        <p className="mb-4 leading-10">
                        <strong><em>Leyendas Peludas</em></strong> es un producto especial exclusivo de <strong>Souls In Xtinction</strong> que introduce a poderosas criaturas míticas con habilidades únicas y un trasfondo ancestral. Este set ofrece a los jugadores una emocionante combinación de cartas, desde figuras personalizables hasta cartas ultra y secretas, todas inspiradas en las misteriosas bestias conocidas como las <strong>"Leyendas Peludas"</strong>. Los jugadores podrán mejorar sus estrategias con nuevas cartas de soporte, además de coleccionar versiones brillantes de series clásicas. Este producto especial es imprescindible para quienes buscan dominar el juego con fuerzas nunca antes vistas en el universo de <strong>Souls In Xtinction.</strong>
                        </p>

                        <h4 className="text-indigo-600 font-semibold mt-10">Leyendas Peludas contiene 1 Figura coleccionable y 25 cartas:</h4>
                        <ul className="py-2 px-4">
                        <li className="mb-1">1   Figura personalizable de Soporte a elección</li>
                        <li className="mb-1">2   Cartas Secretas de Soporte a elección</li>
                        <li className="mb-1">6   Cartas Comunes de Soporte a elección</li>
                        <li className="mb-1">2   Cartas Secretas Leyendas Peludas</li>
                        <li className="mb-1">1   Carta Ultra Leyendas Peludas</li>
                        <li className="mb-1">12  Cartas Comunes Leyendas Peludas</li>
                        <li className="mb-1">1   Carta de Alma Ultra Leyendas Peludas</li>
                        <li className="mb-1">1   Carta Ultra de Primer Estallido</li>
                        </ul>
                        </div>
                    </article>

                    <h2 className="text-center mb-10">En Leyendas peludas puedes escoger 1 de 4 Figuras cada una con sus respectivas cartas.</h2>
                    <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 mx-16">
                        <div className="grid grid-cols-2">
                            <Image 
                                width={200} 
                                height={200} 
                                src={'/products/f-gato.jpg'} 
                                alt="Figura Perro Souls In Xtinction" 
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                                placeholder="blur" 
                                className="m-auto border-2 border-indigo-500"
                            />
                            <div>
                                <h3 className="text-2xl bg-indigo-500 text-white pl-4 my-2">Demonios</h3>
                                <ul className="ml-4">
                                    <li>2 RescatadOgro</li>
                                    <li>2 MiedOgro</li>
                                    <li>2 EncuentrOgro</li>
                                    <li>2 SueñOgro</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <Image 
                                width={200} 
                                height={200} 
                                src={'/products/f-pollo.jpg'} 
                                alt="Figura Perro Souls In Xtinction" 
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                                placeholder="blur" 
                                className="m-auto border-2 border-indigo-500"
                            />
                            <div>
                                <h3 className="text-2xl bg-indigo-500 text-white pl-4 my-2">Angeles</h3>
                                <ul className="ml-4">
                                    <li>2 Hamaliel</li>
                                    <li>2 Armadura reluciente</li>
                                    <li>2 Bendición empírea</li>
                                    <li>2 Redención Angelical</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <Image 
                                width={200} 
                                height={200} 
                                src={'/products/f-perro.jpg'} 
                                alt="Figura Perro Souls In Xtinction" 
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                                placeholder="blur" 
                                className="m-auto border-2 border-indigo-500"
                            />
                            <div>
                                <h3 className="text-2xl bg-indigo-500 text-white pl-4 my-2">Humanos</h3>
                                <ul className="ml-4">
                                    <li>2 Guardaespaldas Jost</li>
                                    <li>2 Armamentista Erik</li>
                                    <li>2 Bola de demolición</li>
                                    <li>2 Cacería de los Humildes</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <Image 
                                width={200} 
                                height={200} 
                                src={'/products/f-conejo.jpg'} 
                                alt="Figura Perro Souls In Xtinction" 
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                                placeholder="blur" 
                                className="m-auto border-2 border-indigo-500"
                            />
                            <div>
                                <h3 className="text-2xl bg-indigo-500 text-white pl-4 my-2">Espíritus</h3>
                                <ul className="ml-4">
                                    <li>2 Manarluza</li>
                                    <li>2 Renkem</li>
                                    <li>2 Espada Arbórea</li>
                                    <li>2 Esencia efimera</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-3 md:col-span-2 sm:col-span-1 ml-3">Contenido fijo:</h2>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">6 Unidades</h3>
                        <ul className="ml-4">
                            <li>1 Puerta Prohibida</li>
                            <li>1 El "Pura Sangre"</li>
                            <li>1 Ruidoso festivo</li>
                            <li>1 Atraepájaros</li>
                            <li>1 Ratikaze</li>
                            <li>1 Prime Wenddygo</li>
                        </ul>
                        <h3 className="text-2xl bg-yellow-500 text-white pl-4 my-2">1 Entes</h3>
                            <ul className="ml-4">
                                <li>1 Camino Radiante</li>
                            </ul>
                    </div>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-purple-500 text-white pl-4 my-2">7 Conjuros</h3>
                        <ul className="ml-4">
                            <li>1 Aplasta Insectos</li>
                            <li>1 Se Busca!</li>
                            <li>1 Infestación</li>
                            <li>1 Maldición de Safira</li>
                            <li>1 Sr. Gatolar</li>
                            <li>1 Salva Almas</li>
                            <li>1 Furiacus</li>
                        </ul>
                        
                    </div>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-gray-500 text-white pl-4 my-2">4 Armas</h3>
                        <ul className="ml-4">
                            <li>1 Armadura reluciente</li>
                            <li>1 Bola de demolición</li>
                            <li>1 Espada Arbórea</li>
                            <li>1 Collar de puas</li>
                        </ul>
                        <h3 className="text-2xl bg-black text-white pl-4 my-2">1 Alma</h3>
                        <ul className="ml-4">
                            <li>1 Alma</li>
                        </ul>
                    </div>
                </section>
                    
                <h2 className="text-center mb-10">Adicionalmente 1 de las siguientes cartas al azar en su rareza Ultra:</h2>

                <div className="m-auto text-center">
                    <ul className="ml-4">
                        <li>Tendera de Municiones</li>
                        <li>Diablillo Reclutador</li>
                        <li>Peluche Triste</li>
                        <li>Jennika</li>
                        <li>Disparo Lateral</li>
                        <li>Vidente del Caos</li>
                        <li>Tzelathiel el Autonomo</li>
                    </ul>
                </div>
                    
                <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-6 md:col-span-4 sm:col-span-1 text-center">Todas las cartas que viene en leyendas peludas:</h2>
                    <Link className="lg:col-span-6 md:col-span-4 sm:col-span-1 m-auto" href={'/cartas?&products=LP'}>
                        <button className="btn hover-primary">Ver detalle de la lista de cartas</button>
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


export default AngelsDeck