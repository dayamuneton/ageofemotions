import Image from "next/image";
import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "@context/authContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@utils/firebaseConfig";
import { setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import EditIcon from "@mui/icons-material/Edit";

function ProfilePhoto() {
   const { currentUser } = useAuth();
   const [image, setImage] = useState<any>();
   const imageHandler = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;
      setImage(file);

      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
   };

   useEffect(() => {
      if (!image) return;

      const updateImage = async () => {
         const photoRef = ref(storage, `/profilePhotos/${image?.name}`);
         await uploadBytes(photoRef, image);

         let photoURL = await getDownloadURL(photoRef);

         await updateProfile(currentUser, {
            photoURL,
         });
         setImage(null);
      };
      updateImage();
   }, [image, currentUser]);

   return (
      <div className="flex items-center justify-center">
         <div className="relative  flex justify-center items-center !aspect-square">
            {currentUser?.photoURL == "" ? (
               <PersonIcon className="!w-[13rem] !h-[13rem] text-gray-500 bg-gray-200 rounded-full overflow-hidden p-2" />
            ) : (
               <Image
                  src={currentUser.photoURL}
                  alt=""
                  fill
                  className="!relative !w-[13rem] !min-w-[13rem] !h-[13rem] rounded-full  overflow-hidden"
               />
            )}
            <label>
               <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={imageHandler}
               />
               <EditIcon className="cursor-pointer absolute bottom-0 right-0 !w-8 !h-8 p-[.3rem] text-gray-600 bg-yellow rounded-full grid place-items-center drop-shadow hover:scale-105" />
            </label>
         </div>
      </div>
   );
}

export default ProfilePhoto;
