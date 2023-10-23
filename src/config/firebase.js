
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1VXNq_TDW9SLyrPSem7JGbG0CQrwrAzw",
  authDomain: "evefever-cd42d.firebaseapp.com",
  projectId: "evefever-cd42d",
  storageBucket: "evefever-cd42d.appspot.com",
  messagingSenderId: "898448164629",
  appId: "1:898448164629:web:325b5ed4c210320bc3cb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);