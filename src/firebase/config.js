// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGGnFUegte558yidX6GhmT87IMFMqm3WU",
  authDomain: "fma-fitness.firebaseapp.com",
  projectId: "fma-fitness",
  storageBucket: "fma-fitness.appspot.com",
  messagingSenderId: "150849442769",
  appId: "1:150849442769:web:d7ac8ccc7c6263e4c406f0",
  measurementId: "G-3L9Y6M24TL"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp);
export const FirebaseDB   = getFirestore (FirebaseApp);

