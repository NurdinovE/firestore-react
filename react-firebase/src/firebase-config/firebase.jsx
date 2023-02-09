import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDF0bFadz3S5DxrxVmufjqaVI8EAx0l6iU",
  authDomain: "react-firtebase.firebaseapp.com",
  projectId: "react-firtebase",
  storageBucket: "react-firtebase.appspot.com",
  messagingSenderId: "570948240941",
  appId: "1:570948240941:web:a1c46ac151c3958b999aa4",
  measurementId: "G-G92GS5798C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider

export const database = getFirestore(app)
