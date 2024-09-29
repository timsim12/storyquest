// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

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
const db = getFirestore(app);

const getDocumentData = async (documentId) => {
  try {
    const docRef = doc(db, "UserInfo", documentId);

    // Get the document snapshot
    const docSnap = await getDoc(docRef);

    // Check if the document exists and log the data
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", data);
      return data;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

const updateUserField = async (documentId, updatedData) => {
  try {
    // Reference the document in the "UserInfo" collection
    const docRef = doc(db, "UserInfo", documentId);

    // Update the field with the new data
    await updateDoc(docRef, updatedData);

    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export { app, analytics, auth, getDocumentData, updateUserField};