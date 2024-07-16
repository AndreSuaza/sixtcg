import Image from "next/image";
import Link from "next/link";

export default function Tiendas() {
  return (
    <div className="bg-white h-screen relative ">
      <div className="bg-white top-0 right-0 absolute w-80 h-screen pt-6 text-gray-900 border-l-4 border-indigo-500">
        <div className="m-2 border-2 border-indigo-500 rounded p-2">
          <h2 className="text-primary text-2xl">Hidden TCG Store</h2>
          <p>BOGOTÁ, CUNDINAMARCA, CO</p>
          <div className="flex">
            <Link className="flex-initial" href={'https://www.facebook.com/soulsinxtinction'} target="_blank">
              <Image width={30} height={30} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-80 hover:opacity-100 cursor-pointer text-indigo-500"/>
            </Link>
            <Link className="flex-initial" href={'https://www.instagram.com/soulsinxtinction'} target="_blank">
              <Image width={30} height={30} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en Instagram" className="opacity-80 hover:opacity-100 cursor-pointer"/>
            </Link>
          </div>
        </div>
        <div className="m-2 border-2 border-indigo-500 rounded p-2">
          <h2 className="text-primary text-2xl">Hidden TCG Store</h2>
          <p>BOGOTÁ, CUNDINAMARCA, CO</p>
          <div className="flex">
            <Link className="flex-initial" href={'https://www.facebook.com/soulsinxtinction'} target="_blank">
              <Image width={30} height={30} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-80 hover:opacity-100 cursor-pointer text-indigo-500"/>
            </Link>
            <Link className="flex-initial" href={'https://www.instagram.com/soulsinxtinction'} target="_blank">
              <Image width={30} height={30} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en Instagram" className="opacity-80 hover:opacity-100 cursor-pointer"/>
            </Link>
          </div>
        </div>
      </div>
      <iframe className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.713922889345!2d-74.07251957226082!3d4.645030165324121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bcd484e7dad%3A0x4e531719a7d42f71!2sHidden%20TCG%20Store!5e0!3m2!1ses!2sco!4v1713324185096!5m2!1ses!2sco"></iframe>
    </div>
  )
}
