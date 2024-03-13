import Image from "next/image";
import { fetchDataDeck } from "./Service/findSpiritsDeck.service";
import { CardView, Title } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import '../products.scss';

export const metadata: Metadata = {
    title: 'Mazo Espíritus - El Árbol de la Vida - Souls In Xtinction',
    description: 'El Árbol de la Vida mazo de espíritus del juego Souls In Xtinction',
    openGraph: {
        title: 'Mazo Espíritus - El Árbol de la Vida - Souls In Xtinction',
        description: 'El Árbol de la Vida mazo de espíritus del juego Souls In Xtinction',
        url: 'https://soulsinxtinction.com/productos/mazo-espiritus',
        siteName: 'Souls In Xtinction',
        images: [
            {
            url: 'https://soulsinxtinction.com/productos/mer.jpg',
            width: 800,
            height: 600,
            alt: 'Mazo Espíritus Souls In Xtinction TCG',
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

const SpiritsDeck = async () => {

    const cards = await fetchDeck();

    return (
        <main className="bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat  md:px-20  md:text-2xl text-xl text-gray-700 ">

            <Title title="Mazo Espirítus" subtitle="El Árbol de la Vida"/>

            <div className="bg-white px-10 py-10 mb-10">

                <article className="product px-4 py-6 bg-light-primary rounded mb-10">
                    <Image 
                        width={460} 
                        height={500} 
                        src={'/products/ME3.png'} 
                        alt="Caja Mazo Espirítus Souls In Xtinction" 
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                        placeholder="blur" 
                        className="m-auto"
                    />
                    <div>
                        <p className="mb-4 leading-10">
                        El Mazo <strong><em>El Árbol de la vida</em></strong> está basado en el arquetipo de los Espíritus, son los guardianes del bosque encantado, que esconde los más grandes secretos de magia y poder entre sus increibles y raras criaturas con habilidades fenomenales que son capaces de devorar a quienes intenten entrometerse en el bosque sin ser invitados o hacerlos caer en profundos sueños de perdición y locura.
                        </p>
                        <p className="mb-6 leading-10">
                            Los Espíritus cuentan con el apoyo de cartas Ente como el <strong><em>Árbol Mágico</em></strong>, poderosas estrategias basadas en tener a tus Entes con vida y así poder jugar cartas como <strong><em>Furia de la Naturaleza</em></strong>, la carta de limpieza masiva más imponente del juego. No dudes en combatir con tus Espíritus ya que si los juegas con gran habilidad, pueden invocarse cada turno!
                        </p>

                        <h4 className="text-gray-900 font-semibold">Mazo El Árbol de la vida contiene 50 cartas:</h4>
                        <ul className="py-2 px-4">
                            <li>47 Comunes</li>
                            <li>3 Cartas Secretas</li>
                            <li>1 Manual de inicio - Tablero</li>
                        </ul>   
                    </div>
                </article>

                
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-3 md:col-span-2 sm:col-span-1 ml-3">Contenido:</h2>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-red-500 text-white pl-4 my-2">24 Unidades</h3>
                        <ul className="ml-4">
                            <li>2 Jerbo</li>
                            <li>2 Copito de Nieve</li>
                            <li>2 Mapuche el Cauteloso</li>
                            <li>2 Araña errante</li>
                            <li>1 Cactus Pinchador</li>
                            <li>2 Pequeño Campus</li>
                            <li>1 Oso Guardián</li>
                            <li>1 Avispa Enfurecida</li>
                            <li>1 Ebrio del Bosque</li>
                            <li>2 Cuidador del Bosque</li>
                            <li>2 Lobo gigante</li>
                            <li>2 Dionaea Matamoscas</li>
                            <li>2 Mistress Espiritual</li>
                        </ul>
                    </div>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-gray-500 text-white pl-4 my-2">5 Armas</h3>
                        <ul className="ml-4">
                            <li>2 Capa de Trascendencia</li>
                            <li>1 Escudo de Plasma</li>
                            <li>2 Equipo de Luciérnagas</li>
                        </ul>
                        <h3 className="text-2xl bg-purple-500 text-white pl-4 my-2">15 Conjuros</h3>
                        <ul className="ml-4">
                            <li>2 Gema Efímera</li>
                            <li>2 Furia de la Naturaleza</li>
                            <li>2 Recompensa del Creyente</li>
                            <li>2 Avance Espiritual</li>
                            <li>1 Sudbury Basin</li>
                            <li>2 Esporas Somníferas </li>
                            <li>1 Latigazo a la Tropa</li>
                            <li>1 Purificador de Almas</li>
                        </ul>
                        
                    </div>
                    <div className="mx-4">
                        <h3 className="text-2xl bg-yellow-500 text-white pl-4 my-2">2 Entes</h3>
                            <ul className="ml-4">
                                <li>1 Semilla, Árbol Mágico</li>
                                <li>1 Arbol Mágico</li>
                            </ul>
                        <h3 className="text-2xl bg-black text-white pl-4 my-2">6 Manás</h3>
                        <ul className="ml-4">
                            <li>1 Maná Alterno</li>
                            <li>5 Maná</li>
                        </ul>
                        <h3 className="text-2xl bg-sky-500 text-white pl-4 my-2">2 Fichas</h3>
                        <ul className="ml-4">
                            <li>1 Espíritu del Bosque</li>
                            <li>1 Espíritu</li> 
                        </ul>
                    </div>
                </section>
                
                
                <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 my-16">
                    <h2 className="text-4xl text-gray-900 lg:col-span-6 md:col-span-4 sm:col-span-1">Cartas:</h2>
                    <Link className="lg:col-span-6 md:col-span-4 sm:col-span-1 m-auto" href={'/cartas?&products=ME3#cards'}>
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


export default SpiritsDeck;