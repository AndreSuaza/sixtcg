import Image from "next/image";
import Link from "next/link";

export default function Tiendas() {
  return (

    <div className="bg-slate-100 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2">

      <div className="bg-slate-50 pt-3 pb-6 lg:px-4 md:px-4 px-2 border-r-2 border-indigo-500 min-h-screen">
        <div className="bg-black rounded p-2
        ">
          Hidden
        </div>
      </div>
      <div className="lg:col-span-3 md:col-span-3">
        <iframe className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.713922889345!2d-74.07251957226082!3d4.645030165324121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bcd484e7dad%3A0x4e531719a7d42f71!2sHidden%20TCG%20Store!5e0!3m2!1ses!2sco!4v1713324185096!5m2!1ses!2sco"></iframe>
      </div>
        
    </div>

   
  )
}
