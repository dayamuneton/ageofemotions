import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "@context/authContext";
import { db } from "@utils/firebaseConfig";
import { updateProfile } from "firebase/auth";
import useClickOutside from "@utils/useClickOutside";

function ProfileField() {
   const [edit, setEdit] = useState(false);
   const { currentUser } = useAuth();
   const [inputName, setNameInput] = useState(currentUser.displayName || "");
   const editRef = useRef<HTMLDivElement | null>(null);

   // const toggleEdit = () => setEdit((edit) => !edit);

   const updateName = async () => {
      if (inputName == "" || !inputName) return;

      const name = inputName.trim();

      await updateProfile(currentUser, {
         displayName: name,
      });

      setEdit(false);

      await setDoc(
         doc(db, "users", currentUser.uid),
         {
            name,
         },
         { merge: true }
      );
   };

   useClickOutside(editRef, () => setEdit(false));

   return (
      <div className="flex justify-between">
         <h4>Name:</h4>
         <div className="max-w-[80%] flex">
            <div className={`${edit ? "hidden" : "flex items-center"}`}>
               <p className="text-sm whitespace-nowrap">
                  {" "}
                  {currentUser?.displayName}{" "}
               </p>
               <EditIcon
                  onClick={() => setEdit(true)}
                  className="!h-8 !w-8 ml-4 text-gray-500 rounded-full cursor-pointer hover:drop-shadow bg-white p-[.3rem] hover:scale-105"
               />
            </div>
            <div
               ref={editRef}
               className={`${edit ? "flex justify-end ml-8" : "hidden"}`}
            >
               <input
                  type="text"
                  value={inputName}
                  onChange={(e) => {
                     setNameInput(e.target.value);
                  }}
                  onKeyUp={async (e) => {
                     if (e.key == "Enter") {
                        await updateName();
                     }
                  }}
                  className="flex w-full ml-auto border-b-2 outline-none border-yellow"
               />

               <button
                  type="submit"
                  onClick={updateName}
                  className="px-4 py-1 ml-auto border-none rounded-sm cursor-pointer bg-yellow"
               >
                  Save
               </button>
            </div>
         </div>
      </div>
   );
}

export default ProfileField;
