// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlv5pQF6IOCX5QRR1kCudbBKIM5-aQAak",
  authDomain: "appfit-7635b.firebaseapp.com",
  projectId: "appfit-7635b",
  storageBucket: "appfit-7635b.appspot.com",
  messagingSenderId: "969381737030",
  appId: "1:969381737030:web:b836e657be5043d0801047",
  measurementId: "G-988VP2S75Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDataBase = getDatabase(app)
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export {
  // analytics,
  firebaseDataBase,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
}