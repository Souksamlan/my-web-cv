// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2xt40pBNt1476SrgfPf4RUfBf1NBDC8",
  authDomain: "my-wed-cv.firebaseapp.com",
  projectId: "my-wed-cv",
  storageBucket: "my-wed-cv.firebasestorage.app",
  messagingSenderId: "996299952287",
  appId: "1:996299952287:web:23a788dc6bd32b88b312aa",
  measurementId: "G-SJGC4CSSP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
