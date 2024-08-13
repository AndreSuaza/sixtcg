
function Events() {
  return (
    <section className={'w-full h-screen'}>
      <div className="absolute top-1/3 w-full text-center lg:w-1/2">
        <h1 className="text-8xl uppercase mb-2">Eventos</h1>
        <p className="text-6xl uppercase">Crea la mejor estrategia, Lucha y Gana</p>
      </div>
      <div className="absolute top-20 right-0 w-full text-center lg:w-1/2 mt-10">
        <div className="overflow-auto px-10 scroll-style mr-10"  style={{maxHeight: 500}}>
          <div className="bg-[url(/events/rey.jpg)] bg-cover bg-top h-40 relative mx-10 mt-10 mb-16">
            <span className="absolute text-xl bg-pink-600 -top-6 left-3 py-1 px-3">10 Septiembre 2023</span>
            <span className="absolute text-3xl bg-pink-600 bottom-7 left-2 py-2 px-3 uppercase">Inicia del competitivo</span>
            <span className="absolute text-2xl bg-pink-600 -bottom-6 left-10 py-2 px-3 uppercase">Rey del Rashomon</span>
          </div>
          <div className="bg-[url(/events/estructurados.jpg)] bg-cover bg-center h-40 relative mx-10 my-16">
            <span className="absolute text-xl bg-blue-700 -top-6 right-10 py-1 px-3">26 Agosto 2023</span>
            <span className="absolute text-3xl bg-blue-700  bottom-7 right-10 py-2 px-3 uppercase">Lanzamineto</span>
            <span className="absolute text-2xl bg-blue-700  -bottom-6 right-2 py-2 px-3 uppercase">Mazos Estructurados</span>
          </div>
          <div className="bg-[url(/events/demo-deck.jpg)] bg-cover bg-top h-40 relative mx-10 my-16">
            <span className="absolute text-xl bg-pink-600 -top-6 left-3 py-1 px-3">12 Agosto 2023</span>
            <span className="absolute text-3xl bg-pink-600 bottom-7 left-2 py-2 px-3 uppercase">Mazos de Demostracion</span>
            <span className="absolute text-2xl bg-pink-600 -bottom-6 left-10 py-2 px-3 uppercase">No te quedes sin el tuyo!</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events