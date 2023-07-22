// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvQSGNL2RtxZ_gRhsTFwC2IwLSUGCC5bo",
  authDomain: "practice-371113.firebaseapp.com",
  projectId: "practice-371113",
  storageBucket: "practice-371113.appspot.com",
  messagingSenderId: "876727819846",
  appId: "1:876727819846:web:c406c8bc2d65ba9f267447",
  measurementId: "G-1WEYSSSCG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const database=getDatabase(app);