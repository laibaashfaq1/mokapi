import ProductCard from "@/components/productCard";
import {client} from "@/sanity/lib/client";

interface Product {
  _id: string;
  description: string;
  title: string;
  image: string;
  price: number;
  stock_availability: boolean;
  rating: number;
  tags: string[];
  slug: string;
}

export default async function Home() {
  const query  = `*[_type=='product'] | order(_createdAt asc){
  _id, description, title, image, price,
  stock_availability, rating, tags, "slug": slug.current}`;

  const products: Product[] = await client.fetch(query);

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
       {products.map((product: Product) => (

           <ProductCard product={product} key={product.slug || product._id}/>         
       ))}
      </section>
    </div>
  );
}

// import ProductCard from "@/components/productCard";
// import {client} from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   description: string;
//   title: string;
//   image: string;
//   price: number;
//   stock_availability: boolean;
//   rating: number;
//   tags: string[];
//   slug: string;
// }

// export default async function Home() {
//   const query  = `*[_type=='product'] | order(_createdAt asc){
//   _id, description, title, image, price,
//   stock_availability, rating, tags, "slug": slug.current}`;

//   const products: Product[] = await client.fetch(query);

//   return (
//     <div>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//        {products.map((product: Product) => (

//            <ProductCard product={product} key={product.slug || product._id}/>         
//        ))}
//       </section>
//     </div>
//   );
// }
