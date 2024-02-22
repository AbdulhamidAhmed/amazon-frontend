// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz4HrF3jSGai7p1HvQef-_1n_Odmyvb_s",
  authDomain: "clone-ce608.firebaseapp.com",
  projectId: "clone-ce608",
  storageBucket: "clone-ce608.appspot.com",
  messagingSenderId: "1062109004401",
  appId: "1:1062109004401:web:be6aa1e10fb95b701911d0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
