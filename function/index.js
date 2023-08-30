const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Nj1yxSIuVLE1XhkdiIOvxIItn8C9iwKfyEsl9TFeQCmxweZ63Bh1Hbi7l3i9WvvMFO2a0iSb0PbqqdBdwefTw6u00Z3lJJGHy",
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      description: "Description of the product/service",
      metadata: {
        transaction_purpose_code: "P0101", // Example transaction purpose code
      },
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

exports.api = functions.https.onRequest(app);
