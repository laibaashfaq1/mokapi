import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

interface ProductDetail {
  description: string;
  title: string;
  image: string;
  price: number;
  stock_availability: string;
  rating: number;
  tags: string[];
  content: PortableTextBlock[];
  slug: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const query = `*[_type=='product' && slug.current == $slug]{
    description, title, image, price, stock_availability, rating, tags, content, "slug": slug.current
  }`;

  const products: ProductDetail[] = await client.fetch(query, { slug: params.slug });

  if (!products.length) {
    return <div>Product not found</div>;
  }

  const product = products[0];

  return (
    <article className="mt-12 mb-24 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-center">
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        
        {/* Left Side */}
        {/* Product Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src={urlFor(product.image).url()}
            width={800}
            height={500}
            alt="Product Image"
            className="rounded mx-auto"
          />
        </div>

        {/* Right Side */}
        {/* Product Details */}
        <div className="w-full sm:w-1/2 flex-1">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">{product.title}</h1>

          {/* Reviews */}
          <div className="flex items-center my-2">
            <FaStar className="text-yellow-500 font-bold"/>
            <FaStar className="text-yellow-500 font-bold"/>
            <FaStar className="text-yellow-500 font-bold"/>
            <FaStar className="text-yellow-500 font-bold"/>
            <FaStar className="text-gray-500 font-bold"/>
            <span className="text-sm text-gray-600 ml-2">{product.rating} reviews</span>
          </div>

          <p className="text-base sm:text-lg text-gray-700 my-4">{product.description}</p>
          <p className="text-xl sm:text-3xl font-semibold text-green-600">Rs {product.price}</p>
          <p className="mt-4 text-sm sm:text-base text-gray-600">Stock Availability: {product.stock_availability}</p>

          {/* Add to Cart Button */}
          <button className="mt-6 sm:w-auto w-full px-4 py-2 sm:py-3 bg-black text-white font-medium rounded hover:bg-yellow-500 flex items-center justify-center">
            <IoCartOutline size={20} className="mr-2" /> 
            Add to Cart
          </button>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap">
            {product.tags.map((tag: string) => (
              <span key={tag} className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="text-lg text-normal text-black dark:text-white mt-8">
        {product.content && (
          <PortableText value={product.content}  />
        )}
      </div>
    </article>
  );
}
