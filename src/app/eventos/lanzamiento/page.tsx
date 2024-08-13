import { CardView } from "@/components";

export default function Lanzamiento() {
  return (
    <section className="mt-10 lg:mx-20">
      <div className="max-w-screen-xl mx-auto">
      <div className="bg-[url('/events/rey-rashomon.jpg')] h-96 bg-no-repeat bg-right-bottom pt-10 relative border-b-2"
          style={{backgroundSize: '50%'}}
      >
        <div className="absolute top-1/3 stroke">
          <span className="text-xl uppercase px-8 ml-2">घटनाः</span>
          <h1 className=" text-6xl uppercase px-8 -mt-2 lg:text-8xl">Rey del Rashomon</h1>
          <p className="text-4xl uppercase mt-1 pb-4 px-8">Inicio del competitivo!</p>
        </div>
      </div>
      <div className="bg-gray-50 text-zinc-600 text-lg pt-20 p-10 mx-10 flex-none font-light font-sans">
        <article>
          <h2 className="capitalize text-center text-primary text-4xl mb-20 font-medium lg:mx-20">Iniciamos el competivo de Soul in Xtincion con toda!</h2>
          <p className="lg:mx-20 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
          <p className="lg:mx-20 mb-4">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
          <p className="lg:mx-20 mb-4">Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.</p>
        

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-24 justify-items-center my-10">
          <CardView img="/card.jpg" alt="carta" title="title carta"/>
          <CardView img="/card.jpg" alt="carta" title="title carta"/>
          <CardView img="/card.jpg" alt="carta" title="title carta"/>
        </div>

        <div className="text-center mb-10">
          <button className="btn btn-lg">Inscribete</button>
        </div>

        <p className="lg:mx-20 mb-4">Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.</p>

        </article>
      </div>
      </div>
    </section>
  )
}
