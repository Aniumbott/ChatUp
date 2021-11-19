import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.React_App_apikey,
  authDomain: process.env.React_App_authDomain,
  projectId: process.env.React_App_projectId,
  storageBucket: process.env.React_App_storageBucket,
  messagingSenderId: process.env.React_App_messagingSenderId,
  appId: process.env.React_App_appId,
  measurementId: process.env.React_App_measurementId,
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
