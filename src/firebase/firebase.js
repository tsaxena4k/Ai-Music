// Import the functions you need from the SDKs you needimport firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANXdF4im9-M8bAWssEsNgTFR2P-jgVTWI",
  authDomain: "ai-music-8c308.firebaseapp.com",
  projectId: "ai-music-8c308",
  storageBucket: "ai-music-8c308.appspot.com",
  messagingSenderId: "361565319281",
  appId: "1:361565319281:web:99495607c5caf527da6bd0",
  measurementId: "G-FPN41ZBRSM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
