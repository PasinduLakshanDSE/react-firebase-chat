
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  
  authDomain: "reactchat-710d1.firebaseapp.com",
  projectId: "reactchat-710d1",
  storageBucket: "reactchat-710d1.appspot.com",
  messagingSenderId: "1099267585920",
  appId: "1:1099267585920:web:1d6d2f9fd82baaf719b365",
  
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()