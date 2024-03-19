import { useEffect, useState } from "react";
import { Product } from "@/models";
import { transformIntoString } from "@/utils/utils";
import { fetchDataProducts } from "./Servives/productsByid.services";
import Image from "next/image";
import Link from "next/link";


interface Props { 
    productsByCard: any[];
}

export const ProductsByCard = ({productsByCard}: Props) => {

    const [products, setProducts] = useState<Product[]>([])

    const getProductsByCodes = async (productCodes: string) => {
        const data = await fetchDataProducts(productCodes);
        console.log(data);
        setProducts( data );
    }

    useEffect(() => {
        getProductsByCodes(transformIntoString(productsByCard, "code"))
    }, [])
    

  return (
    <div className="grid grid-cols-2 gap-2 ml-2">
         {products && products.map((product) =>
            <Link href={`/productos/${product.url}`} target="_blank">
            <div key={product.code}>
                <Image 
                    width={300} 
                    height={300} 
                    src={ product.images?.length > 0 ? `/products/${product.images[0].url}` : `/estructur-1.jpg`} 
                    alt={product.name} 
                    className="rounded-t m-auto"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                    placeholder="blur"
                />
                <h3>{product.name}</h3>
            </div>
            </Link>
         )}
    </div>
  )
}
