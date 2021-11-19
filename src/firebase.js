import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: "chatup-42069.firebaseapp.com",
  projectId: "chatup-42069",
  storageBucket: "chatup-42069.appspot.com",
  messagingSenderId: "499430159944",
  appId: "1:499430159944:web:56a1cecdfb7de42a51ca7d",
  measurementId: "G-7ZHV60VCQ7",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
