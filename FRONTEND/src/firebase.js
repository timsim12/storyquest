// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnpgbJcjMWebYUlLIbHvBN-kHDipNrK2Y",
  authDomain: "shell-hacks2024.firebaseapp.com",
  projectId: "shell-hacks2024",
  storageBucket: "shell-hacks2024.appspot.com",
  messagingSenderId: "799776901136",
  appId: "1:799776901136:web:f473d41cc6278019efa295",
  measurementId: "G-LSWG6YREFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };