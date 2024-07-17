//import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// const firebaseConfig = {
//  apiKey: "AIzaSyCRil_9HhL2UwrcLGLG5ooT3RFKwls6VXQ",
//  authDomain: "medidor-agua-b5a83.firebaseapp.com",
//  databaseURL: "https://medidor-agua-b5a83-default-rtdb.firebaseio.com",
//  projectId: "medidor-agua-b5a83",
//  storageBucket: "medidor-agua-b5a83.appspot.com",
//  messagingSenderId: "483811688154",
//  appId: "1:483811688154:web:5d84bc4bd650a9252cefe3"
//};

const firebaseConfig = {
  apiKey: "AIzaSyCVVL2C5Tuz5HQSjptupQxc5yIjdtEA7XA",
  authDomain: "lab-seeds.firebaseapp.com",
  projectId: "lab-seeds",
  storageBucket: "lab-seeds.appspot.com",
  messagingSenderId: "188796667433",
  appId: "1:188796667433:web:6316404073c65b8a2a3e38",
  measurementId: "G-5ENP04680T"
};

const firebaseApp = initializeApp(firebaseConfig);
//const auth = getAuth()
//export { firebase }
//export { auth }
export const db = getFirestore();
export const auth = getAuth(firebaseApp)

setPersistence(auth, browserLocalPersistence)