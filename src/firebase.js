// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB_LhMYLtUx6wZC5K413zOAFPltJdsm_c",
  authDomain: "eduapp-e68a0.firebaseapp.com",
  projectId: "eduapp-e68a0",
  storageBucket: "eduapp-e68a0.appspot.com",
  messagingSenderId: "417680569794",
  appId: "1:417680569794:web:c8ef01bdeafd289561125b",
  measurementId: "G-N6N024T1Y2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);