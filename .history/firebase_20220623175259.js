import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import firebase from "firebase/combat/app"


const firebaseConfig = {
  apiKey: "AIzaSyDTrQD5zun_iHJ4kLdluzKraTbz06OtcVA",
  authDomain: "shoppingstop-dada0.firebaseapp.com",
  projectId: "shoppingstop-dada0",
  storageBucket: "shoppingstop-dada0.appspot.com",
  messagingSenderId: "599611461211",
  appId: "1:599611461211:web:32210384516991866a797e",
  measurementId: "G-STR9XJQJ7L",

};

const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = app.firestore();
export default db;
 