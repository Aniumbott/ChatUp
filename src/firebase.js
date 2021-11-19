import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.React_App_apikey,
  authDomain: "chatup-42069.firebaseapp.com",
  projectId: "chatup-42069",
  storageBucket: "chatup-42069.appspot.com",
  messagingSenderId: "499430159944",
  appId: process.env.React_App_appId,
  measurementId: "G-7ZHV60VCQ7",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
