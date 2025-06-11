import React from "react";
import Navigation from "./Navigation";
import Logo from "../ui/Logo";
import CartIcon from "../ui/CartIcon";

function Header() {
  return (
    <header className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row items-center justify-between py-[70px] container font-poppins text-slate-gray ">
      <Logo size="lg" />
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="flex items-center space-x-7">
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
