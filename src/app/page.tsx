import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Inicio Soul In Xtinction Nuevo juego de cartas intercambiables ',
  description: 'Souls In Xtinction nuevo juego de cartas intercambiables Colombiano con el que entrarás a un universo lleno de estrategia y emoción.',
  openGraph: {
    title: 'Souls In Xtinction',
    description: 'Nuevo juego de cartas intercambiables con el que entrarás a un universo lleno de estrategia y emoción.',
    url: 'https://soulsinxtinction.com/',
    siteName: 'Souls In Xtinction',
    images: [
      {
        url: 'https://soulsinxtinction.com/og.webp',
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
            height={356} 
            src='/logo-six.webp' 
            alt="Logo Souls In Xtinction" 
            title="Souls In Xtinction"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </div>
        <div className="content-text">
          <h1 className="text-3xl">Nuevo Juego de Cartas</h1>
          <p>Crea tu estrategia y gana!</p>
        </div>
        <div className="column-animation">
            <Link href={"/cartas?&text=Prime%20wenddygo"} target="_blank" title="Prime Wenddygo" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-001-0006.webp' alt="Carta Prime Wenddygo" title="Prime Wenddygo"/>
              </Link>
            <Link href={"/cartas?&text=Zadkiel%20Misericordioso"} target="_blank" title="Zadkiel Misericordioso" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME2-025-6851.webp' alt="Carta Zadkiel Misericordioso" title="Zadkiel Misericordioso"/>
            </Link>
            <Link href={"/cartas?&text=Mark%20Exp-303"} target="_blank" title="Mark Ex-303" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME4-024-1331.webp' alt="Carta Mark Ex-303" title="Mark Ex-303"/>
            </Link>
        </div>
        <div className="column-animation animate-reverse">
            <Link href={"/cartas?&text=Volviendo%20a%20Casa"} target="_blank" title="Volviendo a Casa" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-008-3720.webp' alt="Carta Volviendo a Casa" title="Volviendo a Casa"/>
            </Link>
            <Link href={"/cartas?&text=Bahamoot%20Aniquilador"} target="_blank" title="Bahamoot Aniquilador" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME1-025-7116.webp' alt="Carta Bahamoot Aniquilador" title="Bahamoot Aniquilador"/>
            </Link>
            <Link href={"/cartas?&text=Devora%20Cobardes"} target="_blank" title="Devora Cobardes" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-003-9340.webp' alt="Carta Devora Cobardes" title="Devora Cobardes"/>
            </Link>
        </div>
        <div className="column-animation">
            <Link href={"/cartas?&text=Aleksandra"} target="_blank" title="Aleksandra" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-004-8477.webp' alt="Carta Aleksandra" title="Aleksandra"/>
            </Link>
            <Link href={"/cartas?&text=Dionea%20Matamoscas"} target="_blank" title="Dionea Matamoscas" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME3-025-9620.webp' alt="Carta Dionea Matamoscas" title="Dionea Matamoscas"/>
            </Link>
            <Link href={"/cartas?&text=Ariete"} target="_blank" title="Ariete" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-010-8971.webp' alt="Carta Ariete" title="Ariete"/>
            </Link>
        </div>
        <div className="column-animation animate-reverse hidden-sm">
            <Link href={"/cartas?&text=Copito"} target="_blank" title="Copito de Nieve" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-005-4137.webp' alt="Carta Copito de Nieve" title="Copito de Nieve"/>
            </Link>
            <Link href={"/cartas?&text=Sadhu%20Armormaster"} target="_blank" title="Sadhu Armormaster" rel="nofollow">
                <Image className="rounded" width={200} height={287} src='/home/ME4-025-5419.webp' alt="Carta Sadhu Armormaster" title="Sadhu Armormaster"/>
            </Link>
            <Link href={"/cartas?&text=Angel&types=Ficha"} target="_blank" title="Ficha Ángel" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-009-0009.webp' alt="Carta Ficha Ángel" title="Ficha Ángel"/>
            </Link>
        </div>
        <div className="column-animation hidden-sm" title="Purificador de almas" rel="nofollow">
            <Link href={"/cartas?&text=purificador"} target="_blank">
              <Image className="rounded" width={200} height={287} src='/home/P-006-0349.webp' alt="Carta Purificador de almas" title="Purificador de almas"/>
            </Link>
            <Link href={"/cartas?&text=Arbol%20Mágico"} target="_blank" title="Arbol Mágico" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME3-022-6438.webp' alt="Carta Arbol Mágico" title="Arbol Mágico"/>
            </Link>
            <Link href={"/cartas?&text=Expulsión%20Divina"} target="_blank" title="Expulsión Divina" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME2-009-3219.webp' alt="Carta Expulsión Divina" title="Expulsión Divina"/>
            </Link>
        </div>
        <div className="column-animation animate-reverse hidden-sm">
            <Link href={"/cartas?&text=Mammon"} target="_blank" title="Mammon" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/P-007-6618.webp' alt="Carta Mammon" title="Mammon"/>
            </Link>
            <Link href={"/cartas?&text=Triada"} target="_blank" title="Sátiro de la Triada" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/ME1-026-5513.webp' alt="Carta Sátiro de la Triada" title="Sátiro de la Triada"/>
            </Link>
            <Link href={"/cartas?&types=Mana"} target="_blank" title="Mana Ente" rel="nofollow">
              <Image className="rounded" width={200} height={287} src='/home/MD-022-0066.webp' alt="Carta Mana Ente" title="Mana Ente"/>
            </Link>
        </div>
      </section>

      <aside className="bg-primary text-center py-4 text-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-4 w-96 mx-auto">
          <Link href={'https://www.facebook.com/soulsinxtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/facebook.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
          <Link href={'https://www.tiktok.com/@soulsinxtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/tik-tok.svg' alt="tik-tok" title="Siguenos en Tik-Tok" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link> 
          <Link href={'https://www.instagram.com/soulsinxtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/instagram.svg' alt="instagram" title="Siguenos en Instagram" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
          <Link href={'https://www.youtube.com/@SoulsInXtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/youtube.svg' alt="youtube" title="Siguenos en Youtube" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
        </div>
      </aside>

      

    </main>
  )
}
