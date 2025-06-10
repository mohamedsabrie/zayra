import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-x-10 sm:gap-x-[70px]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
