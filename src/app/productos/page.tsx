import { ProductView } from "@/components/ProductView/ProductView"
import { findProducts } from "./Services/Products.services";
import { Metadata } from "next";
import { Title } from "@/components";

async function fetchProducts() {
  return await findProducts();
}

export const metadata: Metadata = {
  title: 'Productos Soul In Xtinction',
  description: 'Encuentra todos los productos de Souls In Xtinction',
  openGraph: {
    title: 'Productos Soul In Xtinction',
    description: 'Encuentra todos los productos de Souls In Xtinction',
    url: 'https://soulsinxtinction.com/productos',
    siteName: 'Souls In Xtinction',
    images: [
      {
        url: 'https://soulsinxtinction.com/og.jpg',
        width: 800,
        height: 600,
        alt: 'Souls In Xtinction TCG',
      }
    ],
    locale: 'en_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://soulsinxtinction.com/productos',
  }
}

const Products = async () => {

  const products = await fetchProducts();

  return (
    <main className="content-center bg-[url('/bg-cardlist.jpg')] bg-contain bg-no-repeat">
      <Title title="Productos" subtitle="¡Juega ahora y lidera la batalla hacia la victoria!"/>  
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-20 md:mx-24 mx-4">
        {products.map((product) => <ProductView key={product.code} data={product} detail={true}/> )}
      </div>
    </main>
  )
}

export default Products