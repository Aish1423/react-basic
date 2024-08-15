// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP2I7aKBQUxFgt0PVyDGpsLqvJmUw9Qtg",
  authDomain: "hack-wave-fdd3e.firebaseapp.com",
  projectId: "hack-wave-fdd3e",
  storageBucket: "hack-wave-fdd3e.appspot.com",
  messagingSenderId: "846606184594",
  appId: "1:846606184594:web:cbd48db1e3360bdf22b64b",
  measurementId: "G-H0QP5Q5T6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app,analytics}