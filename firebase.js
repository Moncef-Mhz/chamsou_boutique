// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpJBJeYh8ArzXTPfYshpTy9QVZvJ6m9TM",
  authDomain: "boutique-chamsou.firebaseapp.com",
  projectId: "boutique-chamsou",
  storageBucket: "boutique-chamsou.appspot.com",
  messagingSenderId: "356523400049",
  appId: "1:356523400049:web:2726a81eb11632fb10b4d0",
  measurementId: "G-9FW9MN7EMM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
