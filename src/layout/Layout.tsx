import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Alert from './Alert/Alert';
import Breadcrumbs from './BreadCrumbs/BreadCrumbs';
import { CartProvider } from "../context/cartContext"



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
          <CartProvider>

<Alert/>
< Header />
<Breadcrumbs />
<main>{children}</main>
  <Footer />
   </CartProvider>
    </>
  );
};

export default Layout;
