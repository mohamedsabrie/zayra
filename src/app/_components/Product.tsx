import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ViewProductButton from "./ViewProductButton";
import Rating from "../../components/ui/Rating";
import AddToCart from "@/components/AddToCart";

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
          <ViewProductButton productId={productData.id} />
        </div>
      </Link>

      <div className="flex flex-col p-4">
        <div className="mb-2">
          <Rating
            rating={productData.rating?.rate || 0}
            count={productData.rating?.count || 0}
          />
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
          <AddToCart product={productData} />
          {/* <button className=">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
