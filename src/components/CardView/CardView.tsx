'use client'

import Image from "next/image";
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

interface Props { 
    img: string; 
    alt: string;
    title: string;
    rarity: string;
    zoom?: boolean;
    border?: boolean;
}

const CardView = ({ img, alt, title, zoom = false, border = false, rarity }: Props) => {

  const [cardDetail, setCardDetail] = useState(false);
  
  const handlerCardDetail = () => {
    if(zoom) {
      setCardDetail(!cardDetail);
    }
  }

  return (
    <>
    <div className={`relative rounded-2xl`}>
    <Image 
      width={500} 
      height={718} 
      src={img} 
      alt={alt} 
      title={title}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
      placeholder="blur" 
      className="rounded-2xl drop-shadow-md m-auto sm:w-screen"
    />
    { zoom && 
      <div className="absolute bottom-0 right-0 mr-1 mt-1 bg-primary p-1 cursor-pointer opacity-100 hover:scale-125 ease-out duration-300" onClick={handlerCardDetail}>
          <MagnifyingGlassIcon className="h-5 w-5 text-white"/>
      </div>
    }
    </div>
    

    {cardDetail && <div className="fixed z-20 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="bg-white p-2 relative">
        <Image width={380} height={400} src={img} alt={alt} className="border rounded-2xl border-zinc-500" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcyvC/HgAFGwIlHWlhOQAAAABJRU5ErkJggg=="/>
        <div className="absolute -top-1 -right-1 mr-1 mt-1 bg-primary hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={handlerCardDetail}>
            <XMarkIcon className="h-6 w-6 text-white"/>
        </div>
      </div>
    </div>}
    </>
  )
}

export default CardView