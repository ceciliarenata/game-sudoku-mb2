// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCDsxMKGYhCk1keKB9_4z2EOjor-_Q8dWk",
  authDomain: "sudoku-1207a.firebaseapp.com",
  projectId: "sudoku-1207a",
  storageBucket: "sudoku-1207a.firebasestorage.app",
  messagingSenderId: "255682751265",
  appId: "1:255682751265:web:726cae90ba2793b3e16c60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize optional Analytics in browser environments
export const initAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};

export default app;
