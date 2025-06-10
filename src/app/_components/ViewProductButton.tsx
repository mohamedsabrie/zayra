"use client";

import { useRouter } from "next/navigation";

function ViewProductButton({ productId }: { productId: string | number }) {
  const { push } = useRouter();

  return (
    <button
      onClick={() => push(`/product/${productId}`)}
      className="bg-white cursor-pointer text-gray-800 px-4 py-2 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
    >
      View
    </button>
  );
}

export default ViewProductButton;
