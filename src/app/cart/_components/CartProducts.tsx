"use client";

import useCartStore from "@/lib/stores/cart-store";
import React, { useState } from "react";
import CartProduct from "./CartProduct";
import CartProductMobile from "./CartProductMobile";

function CartProducts() {
  const { cart, clearCart, getTotalPrice } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      alert('Order placed successfully! Thank you for shopping with us.');
    } catch {
      alert('Checkout failed. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleClearCart = () => {
    if (
      window.confirm("Are you sure you want to clear all items from your cart?")
    ) {
      clearCart();
    }
  };

  return (
    <div className="  w-full mt-16">
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <table className="w-full mx-auto hidden md:table border-collapse">
            <thead>
              <tr className="border-b border-[#00000063]">
                <th className="text-left py-4 font-normal w-[30%]">Product</th>
                <th className="text-left py-4 font-normal w-[30%]">Price</th>
                <th className="text-left py-4 font-normal w-[30%]">Quantity</th>
                <th className="py-4 text-end pr-8 w-auto font-normal">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartProduct key={item.id} product={item} />
              ))}
            </tbody>
          </table>
          <div className="md:hidden">
            {cart.map((item) => (
              <CartProductMobile key={item.id} product={item} />
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleClearCart}
              className="text-red-500  font-poppins cursor-pointer"
            >
              Clear Cart
            </button>
            <div className="text-right w-1/2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="mt-7 rounded-[10px] cursor-pointer bg-black text-white px-6 py-3 w-full font-poppins disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartProducts;
