const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IZw80SEkX7A22Q4m8dlxTR4hDSOsmZCAgL2vE0wzQAqmCSAkglGGAzuz9U4pmTBewABvZZC18jriKLvKiFExKVK00uZ8r8za4')

//-API

//-App config 
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get('/', (request, response) => response.status(200).send('Hello World👋'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Rezeived BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //Subunits of currency
        currency: "usd",
    });
    //201 means OK -Created, 200 means good
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//-Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/e-webapp-1beea/us-central1/api