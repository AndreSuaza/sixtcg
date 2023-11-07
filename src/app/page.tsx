import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className={'bg-[url("/events/rey-rashomon.jpg")] w-full h-screen bg-black bg-no-repeat bg-cover relative md:bg-contain lg:bg-right bg-center'}>
        <div className="absolute top-1/3 w-full text-center lg:w-1/2 lg:mx-20">
          <span>म्रियमाणाः आत्मानः, क्रीडितुं विनोदं च कर्तुं संग्रहणीयः ताशक्रीडा</span>
          <h1 className="uppercase mb-2 text-6xl stroke lg:text-8xl">Rey del Rashomon</h1>
          <p className="uppercase text-2xl stroke lg:text-4xl">Inicia el competitivo de six lucha y gana</p>
          <button className="btn bt-xl mt-5 font-medium">CONOCE MAS!</button>
        </div>
      </section>
      <div className="bg-indigo-500 text-center py-4 text-white">
        <div className="grid grid-cols-5 w-96 mx-auto">
          <Link href={'https://www.facebook.com/soulsinxtinction'} target="_blank">
            <Image width={39} height={39} src='/redes/facebook.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
          <Link href={'https://www.tiktok.com/@soulsinxtinction'} target="_blank">
            <Image width={35} height={35} src='/redes/tik-tok.svg' alt="tik-tok" title="Siguenos en Tik-Tok" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
            <Link href={'https://www.instagram.com/soulsinxtinction'} target="_blank">
          <Image width={40} height={40} src='/redes/instagram.svg' alt="instagram" title="Siguenos en Instagram" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
            </Link>
          <Link href={'https://twitter.com/soulsinxti0'} target="_blank">
            <Image width={35} height={35} src='/redes/twitterx.svg' alt="twitter" title="Siguenos en Twitter" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
          <Link href={'https://www.youtube.com/@SoulsInXtinction'} target="_blank">
            <Image width={40} height={40} src='/redes/youtube.svg' alt="youtube" title="Siguenos en Youtube" className="opacity-80 hover:opacity-100 cursor-pointer mx-auto"/>
          </Link>
        </div>
      </div>
      
      {/* <div className="text-center mt-14 mb-2">
        <h1 className="text-5xl uppercase">Lucha al lado de los mejores</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 px-20 mb-20">
        <div className="relative flex justify-center">
          <Image width={380} height={300} src='/products/me-demonios.jpg' alt="Mazo Estructurado Demonios" className="border-1"/>
          <h1 className="absolute bottom-3 text-3xl uppercase font-medium stroke-demons text-white">Demonios</h1>
        </div>
        <div className="relative flex justify-center">
          <Image width={380} height={300} src='/products/me-angeles.jpg' alt="Mazo Estructurado Angeles" className=""/>
          <h1 className="absolute bottom-3 text-3xl uppercase font-medium stroke-angels text-white">Angeles</h1>
        </div>
        <div className="relative flex justify-center">
          <Image width={380} height={300} src='/products/me-espiritus.jpg' alt="Mazo Estructurado Espiritus" className=""/>
          <h1 className="absolute bottom-3 text-3xl uppercase font-medium stroke-spirits text-white">Espiritus</h1>
        </div>
        <div className="relative flex justify-center">
          <Image width={380} height={300} src='/products/me-humanos.jpg' alt="Mazo Estructurado Humanos" className=""/>
          <h1 className="absolute bottom-3 text-3xl uppercase font-medium stroke-humans text-white">Humanos</h1>
        </div>
      </div> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[url(/home/angeles.jpg)] bg-blend-darken bg-cover bg-center bg-black bg-opacity-50 h-96 relative hover:bg-opacity-10 cursor-pointer">
          <div className="absolute bottom-0 px-6 mb-10 text-center w-full ">
            <Image width={50} height={50} src={'/iconos/angeles.svg'} alt="incono angeles" className="mx-auto mb-2  "/>
            <span className="text-4xl uppercase">Angeles</span>
            <p className="text-3xl mt-2 pt-2">Controla las vidas de tus adversarios</p>
            <p className="text-3xl pb-2">y no nunca tendras que impartir justicia.</p>
          </div>
        </div>
        <div className="bg-[url(/home/demonios.jpg)] bg-blend-darken bg-cover bg-center bg-black bg-opacity-50 h-96 relative hover:bg-opacity-10 cursor-pointer">
          <div className="absolute bottom-0 px-6 mb-10 text-center w-full ">
            <Image width={55} height={55} src={'/iconos/demonios.svg'} alt="incono demonios" className="mx-auto mb-2"/>
            <span className="text-4xl uppercase">Demonios</span>
            <p className="text-3xl mt-2 pt-2">Todas las almas deben ser libres y</p>
            <p className="text-3xl pb-2"> disfrutar el CAOS!.</p>
          </div>
        </div>
        <div className="bg-[url(/home/espiritus.jpg)] bg-blend-darken bg-cover bg-center bg-black bg-opacity-50 h-96 relative hover:bg-opacity-10 cursor-pointer">
          <div className="absolute bottom-0 px-6 mb-10 text-center w-full ">
            <Image width={60} height={60} src={'/iconos/espiritus.svg'} alt="incono espiritus" className="mx-auto mb-2"/>
            <span className="text-4xl uppercase">Espiritus</span>
            <p className="text-3xl mt-2 pt-2">Todo el que quiera alterar la paz del mundo </p>
            <p className="text-3xl pb-2">es para su beneficio.</p>
          </div>
        </div>
        <div className="bg-[url(/home/humanos.jpg)] bg-blend-darken bg-cover bg-center bg-black bg-opacity-50 h-96 relative hover:bg-opacity-10 cursor-pointer">
          <div className="absolute bottom-0 px-6 mb-10 text-center w-full ">
            <Image width={50} height={50} src={'/iconos/humanos.svg'} alt="incono humanos" className="mx-auto mb-2"/>
            <span className="text-4xl uppercase">Humanos</span>
            <p className="text-3xl mt-2 pt-2">Sobrevive, Adaptate y</p>
            <p className="text-3xl pb-2">Gana!.</p>
          </div>
        </div>
      </div> */}
    </>
  )
}
