import { CardView } from "@/components"

async function HowToPlay () {
  return (
    <div className="mb-10">
    <section className='bg-[url("/howtoplay/bakeneko.jpg")] w-full h-screen bg-black bg-no-repeat bg-cover relative md:bg-contain lg:bg-left bg-center'>
        <div className="absolute top-52 w-full text-center right-0 lg:w-1/2 lg:mx-20">
          <p className="text-4xl uppercase mb-2">Aprende a jugar</p>
          <h2 className="uppercase stroke text-6xl mb-10">Te dare un recorrido por Souls of Xtincion</h2>
          <p className="mx-20 text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
        </div>
    </section>
    <section className="text-center">
      <h1 className="text-6xl uppercase mt-10">Tipode de cartas</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 px-24 justify-items-center my-10">
          <div>
            <CardView img="/card.jpg" alt="carta" title="title carta"/>
            <p className="uppercase text-xl mt-4">Unidad</p>
          </div>
          <div>
            <CardView img="/card.jpg" alt="carta" title="title carta"/>
            <p className="uppercase text-xl mt-4">Conjuro</p>
          </div>
          <div>
            <CardView img="/card.jpg" alt="carta" title="title carta"/>
            <p className="uppercase text-xl mt-4">Arma</p>
          </div>
          <div>
            <CardView img="/card.jpg" alt="carta" title="title carta"/>
            <p className="uppercase text-xl mt-4">Ente</p>
          </div>
          <div>
            <CardView img="/card.jpg" alt="carta" title="title carta"/>
            <p className="uppercase text-xl mt-4">Limbo</p>
          </div>
      </div>
      <p className="text-4xl uppercase">Vamos a entran un poco mas al detalle de cada una de ellas</p>
    </section>

    </div>
  )
}

export default HowToPlay