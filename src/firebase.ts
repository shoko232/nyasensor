// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTR6ln9TMS26qsM4mSuKKAVctS5H6rhIo',
  authDomain: 'nyasensor.firebaseapp.com',
  projectId: 'nyasensor',
  storageBucket: 'nyasensor.appspot.com',
  messagingSenderId: '391388890881',
  appId: '1:391388890881:web:fc96faafe0a61ef0a73d00'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;