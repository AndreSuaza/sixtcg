import { ProductView } from "@/components/ProductView/ProductView"
import { findProducts } from "./Services/Products.services";

async function fetchProducts() {
  return await findProducts();
}

const featuredProducts = [
  { id: 1,
    name: "Mazo Estructurado",
    code: "1234",
    price: "",
    discount: "",
    releaseDate: "",
    logo:  "",
    description:  "",
    deleteAt:  "",
    images: ["md-1.jpg"]
  },
  { id: 2,
    name: "Mazo Estructurado",
    code: "1234",
    price: "",
    discount: "",
    releaseDate: "",
    logo:  "",
    description:  "",
    deleteAt:  "",
    images: ["md-2.jpg"]
  },
  { id: 3,
    name: "Mazo Estructurado",
    code: "1234",
    price: "",
    discount: "",
    releaseDate: "",
    logo:  "",
    description:  "",
    deleteAt:  "",
    images: ["md-3.jpg"]
  },
  { id: 4,
    name: "Mazo Estructurado",
    code: "1234",
    price: "",
    discount: "",
    releaseDate: "",
    logo:  "",
    description:  "",
    deleteAt:  "",
    images: ["md-4.jpg"]
  }
];


const Products = async () => {

  const products = await fetchProducts();

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-24 justify-items-center mt-20">
        { featuredProducts.map((product) => <ProductView data={product}/>)}
      </div>
      <h2 className="text-6xl uppercase text-center mt-20">Productos</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-24 justify-items-center my-20">
        {products.map((product) => <ProductView data={product} detail={true}/>)}
      </div>
      
      
    </>
  )
}

export default Products