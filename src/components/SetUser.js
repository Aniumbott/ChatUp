import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, setDoc } from "@firebase/firestore";

function SetUser({ setUser, user, setTheme }) {
  const [users, setUsers] = useState([]);
  const UserCollectionRef = collection(db, "Users");
  let oldUser = false;
  let usr;
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(UserCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  if (users.length) {
    users.forEach((u) => {
      if (u.email == user.email) {
        usr = u;
        oldUser = true;
      }
    });
    if (oldUser) {
      setUser(usr);
    } else {
      const addUser = async () => {
        const newUser = await setDoc(doc(db, "Users", user.id), user);
      };
      addUser();
      users.push(user);
      setUsers(users);
    }
  }

  return <div></div>;
}
export default SetUser;
