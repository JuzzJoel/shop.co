"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { generateBreadcrumbs } from "./breadCrumbUtils";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<{ label: string; link: string }[]>([]);

  useEffect(() => {
    setBreadcrumbs(generateBreadcrumbs(pathname));
  }, [pathname]);

  if (pathname === "/") return null;

  return (
    <div className="breadcrumbs h-[60px] md:h-[70px] w-screen flex items-center justify-center">
      <div className="breadcrumbs h-[20px] w-9/10 max-w-[77.5rem] flex items-center font-secondary text-black/60 text-[14px] justify-start md:text-[16px]">
        {breadcrumbs
          .filter((breadcrumb, index) => index > 0 || breadcrumb.label !== "Home")
          .map((breadcrumb, index, filteredBreadcrumbs) => (
            <span key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              )}
              {index === filteredBreadcrumbs.length - 1 ? (
                <span className="font-bold">{breadcrumb.label}</span>
              ) : (
                <Link href={breadcrumb.link} className="text-black/60 hover:text-black/80">
                  {breadcrumb.label}
                </Link>
              )}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
