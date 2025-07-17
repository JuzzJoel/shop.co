import React from 'react';
import CartSummary from './CartSummary';
import OrderSummary from './OrderSummary';

function CartOrder() {
  return (
    <section className="flex flex-col items-center w-screen h-auto">
      <div className="flex items-center gap-5 flex-col max-w-[77.5rem] w-9/10 md:flex-row md:items-start ">
        <CartSummary />
        <OrderSummary />
      </div>
    </section>
  );
}

export default CartOrder;
