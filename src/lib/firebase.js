import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatreact-1f575.firebaseapp.com",
  projectId: "chatreact-1f575",
  storageBucket: "chatreact-1f575.appspot.com",
  messagingSenderId: "90969729407",
  appId: "1:90969729407:web:44a99c2ab2da5f297ed24a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
