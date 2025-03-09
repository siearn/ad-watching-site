// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5SV-yK3gOyj8obRsc01f8MUn2KshPPyI",
  authDomain: "si-earn-6f055.firebaseapp.com",
  projectId: "si-earn-6f055",
  storageBucket: "si-earn-6f055.firebasestorage.app",
  messagingSenderId: "853910171902",
  appId: "1:853910171902:web:cc1df5181a2255bd3735af",
  measurementId: "G-ZKGRRG2K9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

