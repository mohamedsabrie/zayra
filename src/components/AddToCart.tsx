"use client";

import useCartStore from "@/lib/stores/cart-store";
import { ProductType } from "@/lib/types";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Quantity from "./Quantity";

function AddToCart({ product }: { product: ProductType }) {
  const { addToCart, cart } = useCartStore();
  const { push } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [cart, product.id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    push("/cart");
  };

  return (
    <div>
      {!isHomePage && <h3 className="mb-3">Quantity</h3>}
      <div className="flex flex-col sm:flex-row sm:items-center w-full gap-y-5 sm:gap-y-0 sm:gap-x-[30px]">
        {!isHomePage && (
          <Quantity quantity={quantity} setQuantity={setQuantity} />
        )}
        <button
          onClick={handleAddToCart}
          className={` w-full flex-1   cursor-pointer     text-sm font-medium  transition-colors duration-200 ${
            isHomePage ? "rounded-full px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white" : "rounded-none px-6 py-3 border-black border   "
          }`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
