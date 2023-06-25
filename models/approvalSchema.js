const mongoose = require("mongoose");

const sellerStatusSchema = new mongoose.Schema({
  status: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    // required: true,
  },
  fullName: {
    type: String,
    // required: true,
  },
  profilePic: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  creditCard: {
    type: String,
    // required: true,
  },
  companyName: {
    type: String,
    // required: true,
  },
  companyLocation: {
    type: String,
    // required: true,
  },
  companyDescription: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("SellerStatus", sellerStatusSchema);
