import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Product({
  productData,
  productIndex,
}: {
  productData: ProductType;
  productIndex: number;
}) {
  return (
    <div className="group relative flex flex-col rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <Link
        prefetch={false}
        href={`/product/${productData.id}`}
        className="flex-1 flex justify-center  items-center relative aspect-[3/4] w-full rounded-t-lg p-4"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            width={300}
            height={400}
            src={productData.image}
            alt={productData.title}
            className="object-contain w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110"
            priority={productIndex < 4}
            loading={productIndex < 4 ? "eager" : "lazy"}
          />
        </div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
          <Link href = {`/product/${productData.id}`} className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View
          </Link>
        </div>
      </Link>

      <div className="flex flex-col p-4">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-4 h-4 ${
                star <= (productData.rating?.rate || 0)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({productData.rating?.count || 0})
          </span>
        </div>

        <h2
          className="line-clamp-2 min-h-[48px] text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200"
          title={productData.title}
        >
          <Link prefetch={false} href={`/product/${productData.id}`}>
            {productData.title}
          </Link>
        </h2>

        <span className="text-sm text-gray-500 mt-1 capitalize">
          {productData.category}
        </span>

        <div className="flex items-center justify-between mt-3">
          <p className="font-jost text-lg font-semibold text-gray-900">
            ${productData.price}
          </p>
          <button className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
