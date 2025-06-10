import { ProductType } from "@/lib/types";
import React from "react";
import Product from "./Product";

function Products({ productsData }: { productsData: ProductType[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {productsData.map((product, index) => (
          <Product key={product.id} productData={product} productIndex={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
