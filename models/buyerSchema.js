const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "email already exists"],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Buyer", buyerSchema);
