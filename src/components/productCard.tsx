'use client'

import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa"; // icon
import { FaRegCheckCircle } from "react-icons/fa";//icon

interface Product {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  tags: string[]; // Optional: Add tags if needed.
  // If needed:
  // stock_availability: number;
  // tags: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide the popup after 2 seconds
  };

  return (
    <section>
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-64 lg:h-72 flex-1">
        <Image
          src={urlFor(product.image).url()} // Use `urlFor` to get the image URL.
          alt={product.title} // Dynamic alt text for better accessibility.
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and description */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Title */}
        <Link href={`/product/${product.slug}`}>
          <span className="text-xl font-semibold text-dark dark:text-light group-hover:text-yellow-600 transition-colors ease-out duration-300">
            {product.title}
          </span>
        </Link>

        {/* Price */}
        <div className="flex items-center mt-2">
          <p className="text-lg font-semibold text-green-700">
            Rs{product.price}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500 font-bold mr-1" />
          <span className="text-sm text-gray-700"> {product.rating} reviews </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 text-center bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors ease-out duration-300"
        >
          Add to cart
        </button>
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-700 text-white p-2 rounded shadow-lg flex items-center">
          <FaRegCheckCircle className="mr-2" />{product.title} is successfully added to cart!
        </div>
      )}
      </div>
    </section>
  );
}
