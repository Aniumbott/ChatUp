// Additionals
import React, { useEffect } from "react";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";

// Main function
function SetUser({ setUser, user }) {
  useEffect(() => {
    getdoc();
  }, []);
  const getdoc = async () => {
    const usr = await getDoc(doc(db, "Users", user.id));

    if (usr.exists()) {
      setUser(usr.data());
    } else {
      const addUser = async () => {
        const newUser = await setDoc(doc(db, "Users", user.id), user);
      };
      addUser();
    }
  };
  return <div></div>;
}
export default SetUser;
