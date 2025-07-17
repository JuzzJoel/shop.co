import type { Metadata } from "next";
import "./globals.css";
import Layout from "../layout/Layout";
import { CartProvider } from "@/context/cartContext";


export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Shop.CO E-commerce website,",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
<html className="en [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-scroll h-screen">

      <body
        className=" antialiased"
      >
        <CartProvider>


        <Layout>
        {children}

          </Layout>
                  </CartProvider>

      </body>
    </html>
  );
}
