import { Product } from "@/models/productModel";
import { ShoppingCart } from "@/models/shoppingCartModel";
import { db } from "@/integrations/firebase/firebaseConfig";
import {
   arrayRemove,
   doc,
   increment,
   serverTimestamp,
   updateDoc,
} from "firebase/firestore";

export const removeCartItem = async (
   shoppingCart: ShoppingCart | null,
   item: Product
) => {
   try {
      if (!shoppingCart) return null;

      const cartDoc = doc(db, "shoppingCarts", shoppingCart.id);

      const cartItems = shoppingCart.cartItems.filter(
         (cartItem) => cartItem.id !== item.id
      );

      await updateDoc(cartDoc, {
         cartItems: arrayRemove(item),
         subTotal: increment(-item.price_in_dollars),
         updatedAt: serverTimestamp(),
      });

      const cartData = { ...shoppingCart, cartItems };

      return new ShoppingCart(cartData);
   } catch (error) {
      console.error("Error removing item from cart: ", error);
      throw new Error("Could not remove item from cart.");
   }
};
