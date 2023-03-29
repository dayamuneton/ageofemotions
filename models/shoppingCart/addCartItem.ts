import { db } from "@/utils/firebaseConfig";
import {
   arrayUnion,
   doc,
   increment,
   serverTimestamp,
   updateDoc,
} from "firebase/firestore";
import { ShoppingCart } from ".";
import { Product } from "../product";
import { createShoppingCart } from "./createShoppingCart";
// import {  } from "../product";

const filterUndefined = (obj: any) => {
   return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined)
   );
};

export const addItemToCart = async (
   shoppingCart: ShoppingCart | null,
   item: Product,
   email: string
) => {
   try {
      let cart = shoppingCart || (await createShoppingCart(email));

      const itemExists = cart.cartItems.some(
         (product) => product.id === item.id
      );

      if (itemExists) {
         console.log("Item already exists in cart.");

         return cart;
      }

      const cartDoc = doc(db, "shoppingCarts", cart.id);

      const data = filterUndefined(item);

      await updateDoc(cartDoc, {
         cartItems: arrayUnion(data),
         subTotal: increment(item.price_in_dollars),
         updatedAt: serverTimestamp(),
      });

      const cartItems = [...cart.cartItems, item];
      const cartData = { ...cart, cartItems };

      return new ShoppingCart(cartData);
   } catch (error) {
      console.error("Error adding item to cart: ", error);
      throw new Error("Could not add item to cart.");
   }
};
