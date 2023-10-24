'use client'

import Image from "next/image";
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

interface Props { 
    img: string; 
    alt: string;
    title: string;
    zoom?: boolean;
}

const CardView = ({ img, alt, title, zoom = true }: Props) => {

  const [cardDetail, setCardDetail] = useState(false);

  const handlerCardDetail = () => {
    if(zoom) {
      setCardDetail(!cardDetail);
    }
  }

  return (
    <>
    <div className="relative cursor-pointer">
      <Image width={380} height={400} src={img} alt={alt} title={title} className="rounded-lg drop-shadow-md" onClick={handlerCardDetail}/>
      {zoom && <div className="absolute bottom-0 right-0 mr-1 mt-1 bg-indigo-500 p-1 cursor-pointer opacity-100 hover:scale-125 ease-out duration-300" onClick={handlerCardDetail}>
            <MagnifyingGlassIcon className="h-5 w-5 text-white"/>
        </div>
      }
    </div>
    {cardDetail && <div className="fixed z-20 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="bg-white p-2 relative">
        <Image width={400} height={800} src={img} alt={alt} className="border border-zinc-500"/>
        <div className="absolute -top-1 -right-11 mr-1 mt-1 bg-indigo-500 hover:bg-indigo-300 p-2 cursor-pointer ease-out duration-300" onClick={handlerCardDetail}>
            <XMarkIcon className="h-6 w-6 text-white"/>
        </div>
      </div>
    </div>}
    </>
  )
}

export default CardView