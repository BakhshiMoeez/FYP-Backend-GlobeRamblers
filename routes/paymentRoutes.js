const paymentController = require("../controllers/paymentController");
const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API);
const router = express.Router();

router
  .route("/")
  .post(paymentController.postPaymentDetails)
  .get(paymentController.getPaymentDetailsForAdmin);

router.post("/create-checkout-session", async (req, res) => {
  const price = req.body.price;
  const tourName = req.body.tourName;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: tourName,
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://globeramblers.netlify.app/checkout-success",
    cancel_url: "https://globeramblers.netlify.app/checkout-failure",
  });

  res.send({ url: session.url });
});

module.exports = router;
