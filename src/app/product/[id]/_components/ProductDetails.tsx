import { ProductType } from "@/lib/types";
import React from "react";
import AddToCart from "@/components/AddToCart";
import Rating from "@/components/ui/Rating";
import ShareProduct from "./ShareProduct";
import { PiShippingContainer } from "react-icons/pi";
import EstimatedDelivery from "./EstimatedDelivery";

function ProductDetails({ productData }: { productData: ProductType }) {
  const { title, price, description, rating } = productData;

  return (
    <div>
      <h3 className="text-sm text-mid-gray">Fasco</h3>
      <span className="text-sm capitalize text-gray-500 mt-2 block">
        {productData.category}
      </span>
      <p className="text-[30px]">{title}</p>
      <Rating rating={rating.rate} count={rating.count} />
      <p className="text-2xl pt-5">${price}</p>
      <p className="font-jost leading-6 pt-4 pb-8">{description}</p>
      <AddToCart product={productData} />
      <ShareProduct title={title} description={description} />
      <div className="h-[1px] bg-[#EEEEEE] mt-1 mb-7" />
      <div className="flex flex-col gap-y-2">
        <EstimatedDelivery />
        <div className="flex flex-wrap items-center text-sm sm:text-base">
          <PiShippingContainer className="h-5 w-5 flex-shrink-0" />
          <span className="font-bold ml-1">Free Shipping & Returns:</span>
          <span className="font-jost ml-1">On all orders over $75</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
