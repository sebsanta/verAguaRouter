//import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRil_9HhL2UwrcLGLG5ooT3RFKwls6VXQ",
  authDomain: "medidor-agua-b5a83.firebaseapp.com",
  databaseURL: "https://medidor-agua-b5a83-default-rtdb.firebaseio.com",
  projectId: "medidor-agua-b5a83",
  storageBucket: "medidor-agua-b5a83.appspot.com",
  messagingSenderId: "483811688154",
  appId: "1:483811688154:web:5d84bc4bd650a9252cefe3"
};

const firebaseApp = initializeApp(firebaseConfig);
//const auth = getAuth()
//export { firebase }
//export { auth }
export const db = getFirestore();
export const auth = getAuth(firebaseApp)

setPersistence(auth, browserLocalPersistence)