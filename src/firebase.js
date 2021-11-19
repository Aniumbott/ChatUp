// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrS9l2valk1Me403c5SWU-GMNVj1Bz7XQ",
  authDomain: "chatup-42069.firebaseapp.com",
  projectId: "chatup-42069",
  storageBucket: "chatup-42069.appspot.com",
  messagingSenderId: "499430159944",
  appId: "1:499430159944:web:56a1cecdfb7de42a51ca7d",
  measurementId: "G-7ZHV60VCQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
