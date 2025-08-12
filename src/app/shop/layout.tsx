import { Metadata } from "next";
import { ReactNode } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Product Detail Page",
    description: "products page description",
  };
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
