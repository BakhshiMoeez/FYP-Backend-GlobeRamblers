const mongoose = require("mongoose");

const paymentRecordSchema = new mongoose.Schema({
  buyerName: String,
  sellerName: String,
  amount: String,
  date: String,
  tourName: String,
});

module.exports = mongoose.model("PaymentRecord", paymentRecordSchema);
