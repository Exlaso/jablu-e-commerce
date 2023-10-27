// components/CheckoutForm.tsx
'use client'
import CheckOutProgress from "@/components/Checkout/Progress";
import React, { ReactNode } from "react";

const CheckoutForm: React.FC<{ children: ReactNode }> = ({ children }) => {

  
  return (
    <main className="py-[15vh]">
      <CheckOutProgress />
      {children}
      <div></div>
    </main>
  );
};

export default CheckoutForm;
