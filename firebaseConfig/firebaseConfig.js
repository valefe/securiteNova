// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm39Uxpiph4PWF3kHovT6ML0kAbuhpuDA",
  authDomain: "securite-nova.firebaseapp.com",
  projectId: "securite-nova",
  storageBucket: "securite-nova.appspot.com",
  messagingSenderId: "428118548089",
  appId: "1:428118548089:web:515b28c1a749f0a80efea8",
  measurementId: "G-3323DECZTP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);