import { retrievePrice } from "@/integrations/stripe/retrievePrice";
import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import Stripe from "stripe";

export class Product {
   id: string;
   title: string;
   description: string;
   priceIdForMembers: string;
   priceId: string;
   images: string[];
   category: string;
   handle: string;
   mailerlite_group: string;
   buttonText: string;
   price: Stripe.Price | null;
   price_in_dollars: number;

   constructor({
      id,
      title,
      description,
      images,
      category,
      handle,
      mailerlite_group,
      priceIdForMembers,
      priceId,
      buttonText,
   }: {
      id: string;
      title: string;
      description: string;
      images: string[];
      category: string;
      handle: string;
      mailerlite_group: string;
      priceIdForMembers: string;
      priceId: string;
      buttonText: string;
   }) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.images = images;
      this.category = category;
      this.handle = handle;
      this.mailerlite_group = mailerlite_group;
      this.buttonText = buttonText;
      this.priceIdForMembers = priceIdForMembers;
      this.priceId = priceId;
      this.price = null;
      this.price_in_dollars = 7;
   }

   async setPrice(isMember?: boolean) {
      let priceId = isMember
         ? this.priceIdForMembers || this.priceId
         : this.priceId;

      this.price = await retrievePrice(priceId);
      this.price_in_dollars = (this.price?.unit_amount ?? 0) / 100;

      return this;
   }
}
export const productConverter = {
   toFirestore: (product: Product) => {
      return {
         id: product.id,
         title: product.title,
         description: product.description,
         images: product.images,
         category: product.category,
         handle: product.handle,
         mailerlite_group: product.mailerlite_group,
         priceIdForMembers: product.priceIdForMembers,
         priceId: product.priceId,
         buttonText: product.buttonText,
      };
   },
   fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
   ) => {
      const data = snapshot.data(options)!;
      const product = {
         id: snapshot.id,
         title: data.title,
         description: data.description,
         images: data.images,
         category: data.category,
         handle: data.handle,
         mailerlite_group: data.mailerlite_group,
         priceIdForMembers: data.priceIdForMembers,
         priceId: data.priceId,
         buttonText: data.buttonText,
      };
      return new Product(product);
   },
};
