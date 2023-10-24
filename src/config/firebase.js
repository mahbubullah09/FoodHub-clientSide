
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEJcXyN1M6tVL4PmdZJfFFdPoO3wuUpzs",
  authDomain: "foodhub-57cf2.firebaseapp.com",
  projectId: "foodhub-57cf2",
  storageBucket: "foodhub-57cf2.appspot.com",
  messagingSenderId: "662970216466",
  appId: "1:662970216466:web:198b2f31d64dfd78c7a8cb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);