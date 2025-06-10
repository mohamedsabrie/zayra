"use client";

import React, { useEffect, useState } from "react";

function Quantity({
  quantity,
  setQuantity,
  handleAddToCart
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart?: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (handleAddToCart) {
      handleAddToCart();
    }
  }, [quantity, handleAddToCart]);

  if (!mounted) {
    return <div className="border border-[#EEEEEE] flex items-center max-w-fit h-[54px]" />;
  }

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.min(999, Math.max(1, value)));
  };

  return (
    <div className="border border-[#EEEEEE] flex items-center max-w-fit">
      <button
        type="button"
        onClick={() => handleQuantityChange(quantity - 1)}
        className="cursor-pointer w-10 flex items-center justify-center text-2xl py-3"
        aria-label="Decrease quantity"
      >
        <span className="w-[9px] bg-black h-[2px] inline-block" />
      </button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) {
            handleQuantityChange(val);
          }
        }}
        aria-label="Quantity"
        className="w-16 text-center focus:outline-none"
      />
      <button
        type="button"
        onClick={() => handleQuantityChange(quantity + 1)}
        className="text-center text-lg w-10 h-full cursor-pointer py-3"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
