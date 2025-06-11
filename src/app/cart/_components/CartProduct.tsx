import Quantity from "@/components/Quantity";
import useCartStore, { CartItem } from "@/lib/stores/cart-store";
import Image from "next/image";
import React, { useState, useCallback, memo, useMemo } from "react";

const CartProduct = memo(function CartProduct({ product }: { product: CartItem }) {
  const [quantity, setQuantity] = useState(product?.quantity);
  const { removeFromCart, addToCart } = useCartStore();

  const handleAddToCart = useCallback(() => {
    addToCart(product, quantity);
  }, [addToCart, product, quantity]);

  const totalPrice = useMemo(() => {
    return (product.price * product.quantity).toFixed(2);
  }, [product.price, product.quantity]);

  return (
    <tr key={product.id} className="border-b border-[#00000063]">
      <td className="py-4 w-[30%]">
        <div className="flex gap-4">
          <Image
            width={80}
            height={80}
            src={product.image}
            alt={product.title}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="font-medium max-w-[176px]">{product.title}</span>
            <div className="flex-1 flex items-center">
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-[#8A8A8A] font-poppins underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 w-[30%]">${product.price}</td>
      <td className="py-4 w-[30%]">
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
        />
      </td>
      <td className="py-4 w-auto text-end pr-8">${totalPrice}</td>
    </tr>
  );
})

export default CartProduct;
