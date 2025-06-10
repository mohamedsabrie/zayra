"use client";

import Link from "next/link";
import CartImage from "@assets/cart.svg";
import Image from "next/image";

export default function CartIcon() {
  return (
    <Link href="/cart" className="relative inline-block">
      <Image
        width={20}
        height={20}
        className="w-5 h-5"
        src={CartImage}
        alt="cart-icon"
      />
    </Link>
  );
}
