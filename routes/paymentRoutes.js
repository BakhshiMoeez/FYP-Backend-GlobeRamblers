const paymentController = require("../controllers/paymentController");
const express = require("express");
const router = express.Router();

router.route("/").post(paymentController.postPaymentDetails);

module.exports = router;
