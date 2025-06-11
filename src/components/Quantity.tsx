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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  if (!mounted) {
    return <div className="border border-[#EEEEEE] flex items-center max-w-fit h-[54px]" />;
  }

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.min(999, Math.max(1, value)));
  };

  return (
    <div className="border border-[#EEEEEE] flex items-center max-w-fit h-[55px]">
      <button
        type="button"
        onClick={() => handleQuantityChange(quantity - 1)}
        className="cursor-pointer w-[48px] h-full flex items-center justify-center text-2xl"
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
        className="w-16 h-full text-center focus:outline-none"
      />
      <button
        type="button"
        onClick={() => handleQuantityChange(quantity + 1)}
        className="text-center text-lg w-[48px] h-full cursor-pointer flex items-center justify-center"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
