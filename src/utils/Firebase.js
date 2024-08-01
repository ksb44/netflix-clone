// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7xVSRzR1ssATu8LEjdvM9pzGfZ_8N0do",
  authDomain: "netflixgpt-985c6.firebaseapp.com",
  projectId: "netflixgpt-985c6",
  storageBucket: "netflixgpt-985c6.appspot.com",
  messagingSenderId: "763365754632",
  appId: "1:763365754632:web:d03f481b4018e07b014ebd",
  measurementId: "G-KK8GE497H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
