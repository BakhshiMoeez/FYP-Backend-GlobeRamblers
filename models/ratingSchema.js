const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  sellerEmail: String,
  overallRatings: {
    type: String,
  },
  fullName: String,
});

module.exports = mongoose.model("Ratings", buyerSchema);
