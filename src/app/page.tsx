import ProductCard from "@/components/productCard";
import {client} from "@/sanity/lib/client";

export default async function Home() {
  const query  = `*[_type=='product'] | order(_createdAt asc){
  description, title, image, price, 
  stock_availability, rating, tags, "slug": slug.current}`;

  const product:Product[]= await client.fetch(query);

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
       {product.map((product: Product) => (

           <ProductCard product={product} />         
       ))}
      </section>
    </div>
  );
}
