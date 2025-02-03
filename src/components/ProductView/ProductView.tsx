"use client" 

import { Product } from "@/models";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";
import { ArrowUpTrayIcon, HeartIcon } from '@heroicons/react/24/solid';

interface Props { 
    data: Product; 
    detail?: boolean;
}



export const ProductView = ({data, detail=false}: Props) => {
  const router = useRouter();
  const path = usePathname();

  const goToProductDetail = (url: string) => {
    console.log(path);
    router.push(`${path}/${url}`);
  }
  return (
    <div className="justify-items-center mx-2 my-2 cursor-pointer relative" onClick={() => goToProductDetail(data.url)}>
      <div className="absolute right-0 p-2">
        {/* <ArrowUpTrayIcon className=" h-6 w-5 text-indigo-500 mb-2 mr-1 opacity-60 hover:opacity-100 transition delay-100"/> */}
        {/* <HeartIcon className=" h-6 w-5 text-indigo-500 mr-1 opacity-60 hover:opacity-100 transition delay-100"/> */}
      </div>
      <Image 
        width={300} 
        height={300} 
        src={ data.images?.length > 0 ? `/products/${data.images[0].url}.webp ` : `/estructur-1.webp`} 
        alt={data.name} 
        className="rounded-t m-auto"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
        placeholder="blur"
      />
      {detail && 
      <div className="border-b border-b-white mx-2 py-2">
        <p className="text-primary">{data.releaseDate}</p>
        <h2 className="text-2xl">{data.name}</h2>
        <span className="text-gray-300">{`${data.numberCards} Cartas`}</span>
      </div>}
    </div>
  )
}
