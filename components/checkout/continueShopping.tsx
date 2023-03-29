import Link from "next/link";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function ContinueShopping() {
   return (
      <div className="flex flex-col items-center">
         <ShoppingCartIcon
            sx={{ fontSize: "4rem" }}
            className="text-gray-800"
         />

         <Link
            href="/shopguiaspdf"
            className="w-full max-w-xl px-8 py-3 mt-2 mb-8 text-2xl font-bold text-white bg-black"
         >
            Seguir comprando
         </Link>
      </div>
   );
}

export default ContinueShopping;
