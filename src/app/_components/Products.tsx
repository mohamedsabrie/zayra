import { ProductType } from "@/lib/types";
import React, { Suspense } from "react";
import Product from "./Product";
import Loading from "./loading";
import { getCategories } from "@/lib/api/products";
import ClientFilters from "./ClientFilters";

interface ProductsProps {
  productsData: ProductType[];
  searchParams: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}

async function Products({ productsData, searchParams }: ProductsProps) {
  const categories = await getCategories();

  const minPrice = Number(searchParams.minPrice) || 0;
  const maxPrice = Number(searchParams.maxPrice) || 1000;

  const filteredProducts = productsData.filter((product) => {
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesPrice;
  });

  return (
    <div className="mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Filters Section */}
        <ClientFilters categories={categories} />

        {/* Products Grid */}
        <div className="lg:col-span-2 xl:col-span-3">
          <Suspense fallback={<Loading />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <Product
                  key={product.id}
                  productData={product}
                  productIndex={index}
                />
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No products match your filters
                </div>
              )}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Products;
