import { useShop } from "@/context/shopContext";
import React from "react";

function TotalAmount({ subTotal }: { subTotal?: number }) {
   if (!subTotal || subTotal === 0) return <></>;
   return (
      <div className="flex items-end w-full max-w-xl mx-auto mt-16">
         <p>Total:</p>
         <div className="flex ml-auto text-2xl font-bold">
            <p>
               {subTotal?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
               })}
            </p>
            <p className="px-1">USD</p>
         </div>
      </div>
   );
}

export default TotalAmount;
