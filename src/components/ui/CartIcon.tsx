"use client";

import Link from "next/link";
import CartImage from "@assets/cart.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import useCartStore from "@/lib/stores/cart-store";
import Badge from "./Badge";

export default function CartIcon() {
  const { getTotalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const totalItems = getTotalItems();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Link href="/cart" className="relative inline-block">
      <Image
        width={20}
        height={20}
        className="w-5 h-5"
        src={CartImage}
        alt="cart-icon"
      />
      {mounted && totalItems > 0 && <Badge count={totalItems} />}
    </Link>
  );
}
