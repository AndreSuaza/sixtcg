import { Title } from "@/components"
import Image from "next/image"
import Link from "next/link"


function Events() {

  return (
    <section className=''>
      <Title title="Eventos" subtitle=""/>
      <div className="my-10 py-10 bg-white w-1/2 m-auto">
        <Link href={'/eventos/lanzamiento'} >
        <Image 
            width={600} 
            height={185} 
            src={'/events/lanzamiento-p.jpg'} 
            alt="Gran Evento de Lanzamiento Souls In Xtinction" 
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
            placeholder="blur" 
            className="m-auto"
        />
        </Link>
      </div>
      
    </section>
  )
}

export default Events