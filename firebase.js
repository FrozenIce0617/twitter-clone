// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-ac51d.firebaseapp.com",
  projectId: "twitter-clone-ac51d",
  storageBucket: "twitter-clone-ac51d.appspot.com",
  messagingSenderId: "554036298105",
  appId: "1:554036298105:web:d7a23f64a6dc7651c66fa8",
  measurementId: "G-ERJ690D1KS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
