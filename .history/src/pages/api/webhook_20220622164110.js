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
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
    // console.log('fulfilling order',session)
    return app.firestore().collection('users').doc(session.metadata.email).collection("orders").doc(session.id).set({
        amount: session.amount_total /100,
        amount_shipping: session.total_details.amount_shipping /100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
}

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe_signature'];

    let event;
    
    //verify that the event posted came from stripe
    try{
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    }catch (err){
        console.log('error', err.message)
        return res.status(400).send(`Webhook error: ${err.message}`)
    }

    //handle the checkout.session.completed event
    if(event.type === 'checkout.session.completed'){
        const session = event.data.object;

        //fulfill the order
    }
  }
};
