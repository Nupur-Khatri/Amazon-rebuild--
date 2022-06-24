import * as firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTrQD5zun_iHJ4kLdluzKraTbz06OtcVA",
  authDomain: "shoppingstop-dada0.firebaseapp.com",
  projectId: "shoppingstop-dada0",
  storageBucket: "shoppingstop-dada0.appspot.com",
  messagingSenderId: "599611461211",
  appId: "1:599611461211:web:32210384516991866a797e",
  measurementId: "G-STR9XJQJ7L",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default db;
 