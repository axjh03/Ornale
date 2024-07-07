import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "axjh03-ornale.firebaseapp.com",
  projectId: "axjh03-ornale",
  storageBucket: "axjh03-ornale.appspot.com",
  messagingSenderId: "416611952120",
  appId: "1:416611952120:web:6147b9c257b06b90fb620d"
};

const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();