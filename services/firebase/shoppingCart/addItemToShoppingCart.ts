import { db } from "@/services/firebase/firebaseConfig";
import {
   arrayUnion,
   doc,
   increment,
   serverTimestamp,
   updateDoc,
} from "firebase/firestore";
import { createShoppingCart } from "./createShoppingCart";
import { removeUndefinedEntriesFromObject } from "@/utils/removeUndefinedEntriesFromObject";
import { ShoppingCart } from "@/models/shoppingCartModel";
import { Product } from "@/models/productModel";

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

      const data = removeUndefinedEntriesFromObject(item);

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
