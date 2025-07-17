"use client"
import React, { useState } from "react";
import Link from "next/link";

function Alert() {
  const [isAlertClose, setIsAlertClose] = useState(true);
  
  const closeAlertBox = () => setIsAlertClose(!isAlertClose);

  return (
    <>
      {isAlertClose && (
        <section className="flex items-center font-secondary justify-center w-screen  py-2 h-[35px] text-white bg-black sm:h-[38px] ">
          <div className="flex relative items-center  justify-center w-[90%] h-full max-w-[77.5rem]">
            <p className="text-xs ">
              Sign up and get 20% off to your first order.
              <Link href="/home/sign-up" className="underline transition duration-300 cursor-pointer hover:decoration-none hover:text-amber-500">
                Sign Up Now
              </Link>
            </p>
            <span
              className="absolute hidden cursor-pointer md:flex top-[50%] right-0 translate-y-[-60%] text-2xl"
              onClick={closeAlertBox}>&times;</span>
          </div>
        </section>
      )}
    </>
  );
}

export default Alert;
