const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  sellerProfilePic: {
    type: String,
  },
  title: {
    type: String,
    //required: true
  },
  description: {
    type: String,
    //required: true
  },
  coverImage: {
    type: String,
    //required: true
  },
  tripDuration: {
    type: Number,
    //required: true
  },
  basePrice: {
    type: String,
  },
  nights: {
    type: Number,
    //required: true,
  },
  salePrice: {
    type: Number,
    //required: true,
  },
  regularPrice: {
    type: Number,
    //required: true,
  },
  photography: {
    type: Boolean,
    //required: true,
  },
  videography: {
    type: Boolean,
    //required: true,
  },
  photographyHardCopy: {
    type: Boolean,
    //required: true,
  },
  rooms: {
    type: Number,
    //required: true,
  },
  price: {
    type: Number,
    //required: true,
  },
  location: {
    type: String,
    //required: true,
  },
  mealName: {
    type: String,
    //required: true,
  },
  mealPricePerPerson: {
    type: Number,
    //required: true,
  },
  mealDescription: {
    type: String,
    //required: true,
  },
  confectionaryItems: {
    type: Boolean,
    //required: true,
  },
  confectionaryItemsDesc: {
    type: String,
  },
  carName: {
    type: String,
    //required: true
  },
  carModel: {
    type: String,
    //required: true
  },
  carAcFacility: {
    type: Boolean,
    //required: true
  },
});

module.exports = mongoose.model("postTour", tourSchema);
