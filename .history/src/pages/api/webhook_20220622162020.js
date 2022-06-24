import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissions.json");

//secure a connection to firebase from backend 
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//establish a conncetion to stripe



export default async (req, res) => {
  if (req.method === "POST") {

  }
};
