import { Product } from "@/models";
import Image from "next/image";

interface Props { 
    data: Product; 
    detail?: boolean;
}

export const ProductView = ({data, detail=false}: Props) => {
  return (
    <div>
      <Image width={300} height={300} src={ data.images[0] ? `/products/${data.images[0]}` : `/estructur-1.jpg`} alt={data.name} className="rounded-t"/>
      {detail && 
      <div className="border-b border-b-white">
        <h2 className="text-2xl text-center my-2">{data.name}</h2>
      </div>}
    </div>
  )
}
