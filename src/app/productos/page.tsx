import { ProductView } from "@/components/ProductView/ProductView"
import { findProducts } from "./Services/Products.services";
import { Metadata } from "next";

async function fetchProducts() {
  return await findProducts();
}

export const metadata: Metadata = {
  title: 'Soul In Xtinction - Productos',
  description: 'Encuentra todos los productos de Souls In Xtinction',
}

const Products = async () => {

  const products = await fetchProducts();

  return (
    <div className="content-center">
      <h2 className="md:text-8xl text-6xl uppercase text-center pt-20 mt-10">Productos</h2>
      {/* <p className="text-xl uppercase text-center mx-40">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-24 my-20">
        {products.map((product) => <ProductView data={product} detail={true}/>)}
      </div>
      
      
    </div>
  )
}

export default Products