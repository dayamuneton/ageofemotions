import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class Profile {
   id: string;
   email: string;
   name: string;
   isMember: boolean;
   constructor({
      id,
      email,
      name,
      isMember,
   }: {
      id: string;
      email: string;
      name: string;
      isMember: boolean;
   }) {
      this.id = id;
      this.email = email;
      this.name = name;
      this.isMember = isMember;
   }
}
export const profileConverter = {
   toFirestore: (profile: Profile) => {
      return {
         id: profile.id,
         email: profile.email,
         name: profile.name,
         isMember: profile.isMember,
      };
   },
   fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
   ) => {
      const data = snapshot.data(options)!;
      return new Profile({
         id: snapshot.id,
         email: data.email,
         name: data.name,
         isMember: data.isMember,
      });
   },
};
