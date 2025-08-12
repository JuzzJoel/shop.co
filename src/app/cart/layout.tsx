import { ReactNode } from "react";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Cart",
    description: "Cart description",
  };
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
