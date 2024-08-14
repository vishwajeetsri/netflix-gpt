// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthhP0q88h_neZI4Gc0PWHGshGHN5YyCE",
  authDomain: "netflixgpt-7731a.firebaseapp.com",
  projectId: "netflixgpt-7731a",
  storageBucket: "netflixgpt-7731a.appspot.com",
  messagingSenderId: "518085850285",
  appId: "1:518085850285:web:7ea547c425162eca654224",
  measurementId: "G-X4B39WTDLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
