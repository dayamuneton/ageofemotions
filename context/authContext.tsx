import React, { createContext, useContext, useState, useEffect } from "react";
import {
   createUserWithEmailAndPassword,
   deleteUser,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
   sendSignInLinkToEmail,
   isSignInWithEmailLink,
   signInWithEmailLink,
} from "firebase/auth";
import { auth, db, googleProvider } from "@utils/firebaseConfig";
import {
   doc,
   getDoc,
   onSnapshot,
   serverTimestamp,
   setDoc,
} from "firebase/firestore";

const AuthContext = createContext<any>(null);

export function useAuth() {
   return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
   const [currentUser, setCurrentUser] = useState<any>();
   const [user, setUser] = useState();
   const [profile, setProfile] = useState<any>();
   const [loaded, setLoaded] = useState(false);

   async function loginWithGoogle() {
      try {
         await signInWithPopup(auth, googleProvider);
      } catch (error) {
         console.error(error);
         return error;
      }
   }

   async function registerUserWithEmailAndPassword(
      email: string,
      password: string,
      name: string
   ) {
      try {
         await createUserWithEmailAndPassword(auth, email, password);
         console.log(auth.currentUser);

         if (!auth.currentUser) return;

         await updateProfile(auth.currentUser, {
            displayName: name,
         });
      } catch (error: any) {
         console.log(error);

         return error.message;
      }
   }

   async function signInWithEmail(email: string, password: string) {
      try {
         await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
         console.log(error);

         return error.message;
      }
   }

   async function logout() {
      await signOut(auth);
   }

   async function registerUserWithEmailLink(email: string, url: string) {
      // If the user is re-entering their email address but already has a code
      if (isSignInWithEmailLink(auth, url) && !!email) {
         // Sign the user in
         try {
            await signInWithEmailLink(auth, email, url);
         } catch (error) {
            return console.error(error);
         }
         return;
      }

      try {
         await sendSignInLinkToEmail(auth, email, {
            url,
            handleCodeInApp: true,
         });
         window.localStorage.setItem("emailForSignIn", email);
      } catch (error) {
         return console.error(error);
      }
   }

   useEffect(() => {
      const unSubscribe = auth.onAuthStateChanged((user) => {
         setCurrentUser(user);
         setLoaded(true);
      });
      return unSubscribe;
   }, []);

   useEffect(() => {
      if (!currentUser) {
         setProfile(null);
         return;
      }

      const userRef = doc(db, "users", currentUser.email);

      const unSubscribe = onSnapshot(
         userRef,
         (snapshot) => {
            if (!snapshot.exists()) return;

            setProfile(snapshot.data());
         },
         (error) => console.error(error)
      );
      return unSubscribe;
   }, [currentUser]);

   const value = {
      setCurrentUser,
      currentUser,
      loginWithGoogle,
      registerUserWithEmailAndPassword,
      signInWithEmail,
      logout,
      user,
      setUser,
      profile,
      setProfile,
      registerUserWithEmailLink,
   };

   return (
      <AuthContext.Provider value={value}>
         {loaded && children}
      </AuthContext.Provider>
   );
}
