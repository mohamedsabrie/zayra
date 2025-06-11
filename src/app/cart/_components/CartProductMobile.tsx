import Quantity from "@/components/Quantity";
import useCartStore, { CartItem } from "@/lib/stores/cart-store";
import Image from "next/image";
import React, { useState, useCallback, memo, useMemo } from "react";

const CartProductMobile = memo(function CartProductMobile({
  product,
}: {
  product: CartItem;
}) {
  const [quantity, setQuantity] = useState(product?.quantity);
  const { removeFromCart, addToCart } = useCartStore();

  const handleAddToCart = useCallback(() => {
    addToCart(product, quantity);
  }, [addToCart, product, quantity]);

  const totalPrice = useMemo(() => {
    return (product.price * product.quantity).toFixed(2);
  }, [product.price, product.quantity]);

  return (
    <div key={product.id} className="border-b border-[#00000063] p-4">
      <div className="flex gap-4">
        <Image
          width={80}
          height={80}
          src={product.image}
          alt={product.title}
          className="object-contain h-[80px]"
        />
        <div className="flex-1">
          <span className="font-medium text-sm line-clamp-2">
            {product.title}
          </span>
          <span className="text-gray-600 text-sm mt-1 block">
            ${product.price}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:items-center justify-between">
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
        />
        <div className="font-medium">Total: ${totalPrice}</div>
      </div>

      <button
        onClick={() => removeFromCart(product.id)}
        className="mt-4 text-[#8A8A8A] font-poppins underline cursor-pointer"
      >
        Remove 
      </button>
    </div>
  );
});

export default CartProductMobile;
