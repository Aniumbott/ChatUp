import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.apikey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
