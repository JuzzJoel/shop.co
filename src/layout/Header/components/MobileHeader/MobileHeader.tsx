"use client";

import { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";

function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="h-[65px] w-[91%] flex items-center justify-center border-b-1 border-black/10">
      {/* Mobile layout */}
      <div className="relative h-[100px] flex items-center justify-center w-full md:hidden">
        <button
          className="absolute top-0 left-0 h-full text-gray-600 cursor-pointer hover:text-gray-900 w-1/10"
          onClick={toggleMobileMenu}
        >
          <Image
            src="/assets/images/Icons/hamburger.png"
            alt="Hamburger Icon"
            className=" object-cover"
            width={24}
            height={24}
          />
        </button>
        <Link href="/" className="flex items-center justify-center w-full">
          <h1 className="font-primary font-black text-[32px]">SHOP.CO</h1>
        </Link>
        <div className="absolute right-0 flex items-center justify-between w-1/4">
          <Image
            src="/assets/images/Icons/search.png"
            alt=""
            className=" object-cover cursor-pointer aspect-square "
            onClick={handleSearchIconClick}
            width={24}
            height={24}
          />
          <Link href="/cart">
            <Image
              src="/assets/images/Icons/cart.png"
              alt="Cart Icon"
              className=" object-cover cursor-pointer"
              width={24}
              height={24}
            />
          </Link>
          <Image
            src="/assets/images/Icons/user.png"
            alt="User Icon"
            className=" object-cover cursor-pointer"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-white p-4">{/* <MobileSearchBar /> */}</div>
      )}
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          isShopMenuOpen={isShopMenuOpen}
          toggleShopMenu={toggleShopMenu}
        />
      )}
    </header>
  );
}

export default MobileHeader;
