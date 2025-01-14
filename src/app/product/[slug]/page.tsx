import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/components/CustomComponent";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default async function Page({ params }: { params: { slug: string } }) {
  const query = `*[_type=='product' && slug.current == $slug]{
    description, title, image, price, stock_availability, rating, tags, content, "slug": slug.current
  }`;

  // Fetch the data directly in the component
  const product = await client.fetch(query, { slug: params.slug });

  if (!product.length) {
    return <div>Product not found</div>;
  }

  const Productdet = product[0];

  return (
    <article className="mt-12 mb-24 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-center">
      
        <div className="flex flex-col sm:flex-row gap-6 items-center">

          {/* Left Side */}
          {/* Product Image */}
          <div className="w-full sm:w-1/2">
            <Image
              src={urlFor(Productdet.image).url()}
              width={800}
              height={600}
              alt="Product Image"
              className="rounded mx-auto"
            />
          </div>

          {/* Right Side */}

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900">{Productdet.title}</h1>

            {/* Reviews */}
            <div className="flex items-center my-2">
              <FaStar className="text-yellow-500 font-bold"/>
              <FaStar className="text-yellow-500 font-bold"/>
              <FaStar className="text-yellow-500 font-bold"/>
              <FaStar className="text-yellow-500 font-bold"/>
              <FaStar className="text-gray-500 font-bold"/>
              <span className="text-sm text-gray-600 ml-2">
                {Productdet.rating} reviews
                </span>
            </div>

            <p className="text-lg text-gray-700 my-4">{Productdet.description}</p>
            <p className="text-3xl font-semibold text-green-600">Rs {Productdet.price}</p>
            <p className="mt-4 text-sm text-gray-600">
              Stock Availability: {Productdet.stock_availability}
            </p>
            
            {/* Add to Cart Button */}
            <button className="mt-6 sm:w-auto px-60 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 flex items-center justify-center">
            <IoCartOutline size={20} className="mr-2" /> 
            Add to Cart
            </button>

            {/* Tags */}
            <div className="mt-4"> 
                {Productdet.tags.map((tag: string) => ( 
                <span key={tag} 
                className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2"> 
                {tag} 
                </span> 
                ))}</div>
          </div>
        </div>

        
       
      {/* Additional Content */}
      <div className="text-lg text-normal text-black dark:text-white mt-8">
        {Productdet.content && (
          <PortableText value={Productdet.content} components={components} />
        )}
      </div>
    </article>
  );
}
