import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Inicio Soul In Xtinction Nuevo juego de cartas intercambiables ',
  description: 'Souls In Xtinction nuevo juego de cartas intercambiables Colombiano con el que entrarás a un universo lleno de estrategia y emoción. Elige tu camino, escoge con cuidado tus cartas y forja tu propio destino hacia la victoria, enfrentándote a desafíos emocionantes y descubriendo nuevas formas de jugar con cada partida.',
  openGraph: {
    title: 'Souls In Xtinction',
    description: 'Entrarás a un universo lleno de estrategia y emoción TCG Colombia',
    url: 'https://soulsinxtinction.com/',
    siteName: 'Souls In Xtinction',
    images: [
      {
        url: 'https://soulsinxtinction.com/og.jpg',
        width: 800,
        height: 600,
        alt: 'Souls In Xtinction TCG',
      }
    ],
    locale: 'en_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://soulsinxtinction.com/',
  }
}

export default function Home() {
  return (
    <main>
      <section className="card-animation">
        <div className="content stroke">
          <Image 
            width={300} 
            height={319} 
            src='/logo-six.png' 
            alt="Logo Souls In Xtinction" 
            title="Souls In Xtinction"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </div>
        <div className="content-text">
          <h2>Nuevo Juego de Cartas</h2>
          <p>Crea tu estrategia y gana!</p>
        </div>
        <div className="column-animation">
            <Link href={"/cartas?&text=Prime%20wenddygo"} target="_blank" title="Prime Wenddygo">
              <Image className="animate-img" width={200} height={287} src='/home/P-001-0006.jpg' alt="Carta Prime Wenddygo" title="Prime Wenddygo"/>
              </Link>
            <Link href={"/cartas?&text=Zadkiel%20Misericordioso"} target="_blank" title="Zadkiel Misericordioso">
              <Image className="animate-img" width={200} height={287} src='/home/ME2-025-6851.jpg' alt="Carta Zadkiel Misericordioso" title="Zadkiel Misericordioso"/>
            </Link>
            <Link href={"/cartas?&text=Mark%20Exp-303"} target="_blank" title="Mark Ex-303">
              <Image className="animate-img" width={200} height={287} src='/home/ME4-024-1331.jpg' alt="Carta Mark Ex-303" title="Mark Ex-303"/>
            </Link>
        </div>
        <div className="column-animation animate-reverse">
            <Link href={"/cartas?&text=Volviendo%20a%20Casa"} target="_blank" title="Volviendo a Casa">
              <Image className="animate-img" width={200} height={287} src='/home/P-008-3720.jpg' alt="Carta Volviendo a Casa" title="Volviendo a Casa"/>
            </Link>
            <Link href={"/cartas?&text=Bahamoot%20Aniquilador"} target="_blank" title="Bahamoot Aniquilador">
              <Image className="animate-img" width={200} height={287} src='/home/ME1-025-7116.jpg' alt="Carta Bahamoot Aniquilador" title="Bahamoot Aniquilador"/>
            </Link>
            <Link href={"/cartas?&text=Devora%20Cobardes"} target="_blank" title="Devora Cobardes">
              <Image className="animate-img" width={200} height={287} src='/home/P-003-9340.jpg' alt="Carta Devora Cobardes" title="Devora Cobardes"/>
            </Link>
        </div>
        <div className="column-animation">
            <Link href={"/cartas?&text=Aleksandra"} target="_blank" title="Aleksandra">
              <Image className="animate-img" width={200} height={287} src='/home/P-004-8477.jpg' alt="Carta Aleksandra" title="Aleksandra"/>
            </Link>
            <Link href={"/cartas?&text=Dionea%20Matamoscas"} target="_blank" title="Dionea Matamoscas">
              <Image className="animate-img" width={200} height={287} src='/home/ME3-025-9620.jpg' alt="Carta Dionea Matamoscas" title="Dionea Matamoscas"/>
            </Link>
            <Link href={"/cartas?&text=Ariete"} target="_blank" title="Ariete">
              <Image className="animate-img" width={200} height={287} src='/home/P-010-8971.jpg' alt="Carta Ariete" title="Ariete"/>
            </Link>
        </div>
        <div className="column-animation animate-reverse hidden-sm">
            <Link href={"/cartas?&text=Copito"} target="_blank" title="Copito de Nieve">
              <Image className="animate-img" width={200} height={287} src='/home/P-005-4137.jpg' alt="Carta Copito de Nieve" title="Copito de Nieve"/>
            </Link>
            <Link href={"/cartas?&text=Sadhu%20Armormaster"} target="_blank" title="Sadhu Armormaster">
                <Image className="animate-img" width={200} height={287} src='/home/ME4-025-5419.jpg' alt="Carta Sadhu Armormaster" title="Sadhu Armormaster"/>
            </Link>
            <Link href={"/cartas?&text=Angel&types=Ficha"} target="_blank" title="Ficha Ángel">
              <Image className="animate-img" width={200} height={287} src='/home/P-009-0009.jpg' alt="Carta Ficha Ángel" title="Ficha Ángel"/>
            </Link>
        </div>
        <div className="column-animation hidden-sm" title="Purificador de almas">
            <Link href={"/cartas?&text=purificador"} target="_blank">
              <Image className="animate-img" width={200} height={287} src='/home/P-006-0349.jpg' alt="Carta Purificador de almas" title="Purificador de almas"/>
            </Link>
            <Link href={"/cartas?&text=Arbol%20Mágico"} target="_blank" title="Arbol Mágico">
              <Image className="animate-img" width={200} height={287} src='/home/ME3-022-6438.jpg' alt="Carta Arbol Mágico" title="Arbol Mágico"/>
            </Link>
            <Link href={"/cartas?&text=Expulsión%20Divina"} target="_blank" title="Expulsión Divina">
              <Image className="animate-img" width={200} height={287} src='/home/ME2-009-3219.jpg' alt="Carta Expulsión Divina" title="Expulsión Divina"/>
            </Link>
        </div>
        <div className="column-animation animate-reverse hidden-sm">
            <Link href={"/cartas?&text=Mammon"} target="_blank" title="Mammon">
              <Image className="animate-img" width={200} height={287} src='/home/P-007-6618.jpg' alt="Carta Mammon" title="Mammon"/>
            </Link>
            <Link href={"/cartas?&text=Triada"} target="_blank" title="Sátiro de la Triada">
              <Image className="animate-img" width={200} height={287} src='/home/ME1-026-5513.jpg' alt="Carta Sátiro de la Triada" title="Sátiro de la Triada"/>
            </Link>
            <Link href={"/cartas?&types=Mana"} target="_blank" title="Mana Ente">
              <Image className="animate-img" width={200} height={287} src='/home/MD-022-0066.jpg' alt="Carta Mana Ente" title="Mana Ente"/>
            </Link>
        </div>
      </section>

      <aside className="bg-primary text-center py-4 text-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 w-96 mx-auto">
          <Link href={'https://www.facebook.com/soulsinxtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/facebook.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
          {/* <Link href={'https://www.tiktok.com/@soulsinxtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/tik-tok.svg' alt="tik-tok" title="Siguenos en Tik-Tok" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link> */}
          <Link href={'https://www.instagram.com/soulsinxtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/instagram.svg' alt="instagram" title="Siguenos en Instagram" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
          {/* <Link href={'https://twitter.com/soulsinxti0'} target="_blank">
            <Image width={40} height={40} src='/redes/twitterx.svg' alt="twitter" title="Siguenos en Twitter" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link> */}
          <Link href={'https://www.youtube.com/@SoulsInXtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/youtube.svg' alt="youtube" title="Siguenos en Youtube" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
        </div>
      </aside>

      {/* <section className='lg:p-10 md:p-10 p-2 text-2xl bg-[url("/home/wenddygo-descripcion.jpg")] bg-no-repeat lg:bg-contain md:bg-contain lg:bg-left md:bg-left bg-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 border-b-2 border-indigo-500'>
        
        <p className="col-start-2 text-gray-200 p-6 text-center leading-relaxed bg-black bg-opacity-75">

          Bienvenido a <b> Souls In Xtinction </b> nuevo juego de cartas intercambiables con el que entrarás a un universo lleno de estrategia y emoción. Elige tu camino, escoge con cuidado tus cartas y forja tu propio destino hacia la victoria, enfrentándote a desafíos emocionantes y descubriendo nuevas formas de jugar con cada partida.
          <video width="500" height="320" controls preload="none" className="mt-16 m-auto">
            <source src="https://www.youtube.com/watch?v=a3pz0OOhfEk" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </p>

      </section>

      <section className="sds">

        <div>
          <h2 className="text-primary">MAZOS ESTRUCTURADOS</h2>
          <p>Escoge tus mejores aliados</p>
        </div>
        <Link href={'/productos/mazo-angeles'} target="_blank">
          <Image width={300} height={300} src='/home/sda.jpg' alt="Estructura de Angeles" title="Mazo Estructurado Angeles" className="cursor-pointer"/>
        </Link>
        <Link href={'/productos/mazo-demonios'} target="_blank">
          <Image width={300} height={300} src='/home/sdd.jpg' alt="Estructura de Demonios" title="Mazo Estructurado Demonios" className="cursor-pointer"/>
        </Link>
        <Link href={'/productos/mazo-espiritus'} target="_blank">
          <Image width={300} height={300} src='/home/sde.jpg' alt="Estructura de Espíritus" title="Mazo Estructurado Espíritus" className="cursor-pointer"/>
        </Link>
        <Link href={'/productos/mazo-humanos'} target="_blank">
          <Image width={300} height={300} src='/home/sdh.jpg' alt="Estructura de Humanos" title="Mazo Estructurado Humanos" className="cursor-pointer"/>
        </Link>

      </section>

      <aside className="races py-2 grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3">
        <Image width={40} height={40} src='/iconos/aliens.svg' alt="icono aliens souls in xtinction" title="Icono Aliens souls in xtinction"/>
        <Image width={40} height={40} src='/iconos/angeles.svg' alt="icono angeles souls in xtinction" title="Icono Angeles souls in xtinction"/>
        <Image width={40} height={40} src='/iconos/demonios.svg' alt="icono demonios souls in xtinction" title="Icono Demonios souls in xtinction"/>
        <Image width={40} height={40} src='/iconos/entes.svg' alt="icono entes souls in xtinction" title="Icono Aliens Entes in xtinction"/>
        <Image width={40} height={40} src='/iconos/espiritus.svg' alt="icono espíritus souls in xtinction" title="Icono Espíritus souls in xtinction"/>
        <Image width={40} height={40} src='/iconos/humanos.svg' alt="icono humanos souls in xtinction" title="Icono Humanos souls in xtinction"/>
      </aside>

      <section className={'bg-[url("/events/rey-rashomon.jpg")] banner bg-no-repeat bg-contain lg:bg-right bg-center'}>
        <div>
          <span>म्रियमाणाः आत्मानः, क्रीडितुं विनोदं च कर्तुं संग्रहणीयः ताशक्रीडा</span>
          <h2 className="uppercase mb-2 md:text-4xl stroke lg:text-8xl">Souls Master Series</h2>
          <p className="uppercase text-2xl stroke lg:-4xl">Inicia el competitivo, lucha y gana</p>
          <p className="uppercase text-4xl stroke lg:text-6xl stroke text-primary">NOVIEMBRE 2024</p>
        </div>
      </section> */}

      

    </main>
  )
}
