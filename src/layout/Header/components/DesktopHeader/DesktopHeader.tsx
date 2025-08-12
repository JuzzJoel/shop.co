"use client"
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function DesktopHeader() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <header className="flex-row justify-center h-[96px] left-0 flex items-center w-screen  h-top-50">
      <div className=" h-full border-b flex justify-center  items-center max-w-[77.5rem] w-[90%]  border-black/10">
        <div className="flex items-center w-full md:gap-[15px] lg:gap-[20px] xl:gap-[50px]  h-[50px] justify-between ">
          <Link href="/">
            <h1 className="font-primary font-black text-[32px]">SHOP.CO</h1>
          </Link>

          <nav className="flex items-center justify-between h-full w-13/40">
            <ul className="flex items-center gap-[15px] justify-between w-full h-full font-secondary">
              <li
                className="relative group"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <Link
                  href="/"
                  className="flex items-center gap-[-10px] text-black hover:text-gray-900 text-[14px] lg:text-[16px] whitespace-nowrap "
                >
                  Shop
                  <button className="w-2" aria-label="Shop tab toggle">
                    {isHovered ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                  </button>
                </Link>
                <ul className="hidden absolute group-hover:block bg-white shadow-md w-40 rounded-[5px] top-10">
                  <li className="w-full hover:bg-gray-200 ">
                    <Link href="#" className="block px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-24">
                      Men
                    </Link>
                  </li>
                  <li className="w-full hover:bg-gray-200">
                    <Link href="#" className="block px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-24">
                      Women
                    </Link>
                  </li>
                  <li className="w-full hover:bg-gray-200">
                    <Link href="#" className="block px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-24">
                      Children
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="#"
                  className="w-1/4  text-black hover:text-gray-900 text-[14px] lg:text-[16px] whitespace-nowrap"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/#new-arrivals"
                  className="w-1/4 text-black hover:text-gray-900 text-[14px] lg:text-[16px] whitespace-nowrap"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-1/4 text-black hover:text-gray-900 text-[14px] lg:text-[16px] whitespace-nowrap"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center mx-[10px] justify-between w-55/24 ">
            <>
              <SearchBar />
            </>

            <div className="flex items-center justify-between border  w-4/30">
              <Link href="/cart">
                <Image
                  src="/assets/images/Icons/cart.png"
                  alt="Cart Icon"
                  className="object-contain h-7 w-7 md:w-5 md:h-7"
                  width={24}
                  height={24}
                />
              </Link>

              <Image
                src="/assets/images/Icons/user.png"
                alt="User Icon"
                className="object-contain cursor-pointer h-7 w-7 md:w-5 md:h-7"
                width={7}
                height={7}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
