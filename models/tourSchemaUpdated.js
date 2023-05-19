const mongoose = require("mongoose");

const tourSchemaUpdated = new mongoose.Schema({
  destination: {
    type: String,
  },
  source: {
    type: String,
  },
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
  basePrice: {
    type: String,
  },
  bronzePhotographyDesc: {
    type: String,
    //required: true
  },
  bronzePhotographyPrice: {
    type: String,
  },
  bronzeHotelDesc: {
    type: String,
    //required: true,
  },
  bronzeHotelPrice: {
    type: String,
    //required: true,
  },
  bronzeMealDesc: {
    type: String,
    //required: true,
  },
  bronzeMealPrice: {
    type: String,
    //required: true,
  },
  bronzeCarDesc: {
    type: String,
    //required: true,
  },
  bronzeCarPrice: {
    type: String,
    //required: true,
  },
  bronzeAddInfo: {
    type: String,
    //required: true,
  },
  silverPhotographyDesc: {
    type: String,
    //required: true,
  },
  silverPhotographyPrice: {
    type: String,
    //required: true,
  },
  silverHotelDesc: {
    type: String,
    //required: true,
  },
  silverHotelPrice: {
    type: String,
    //required: true,
  },
  silverMealDesc: {
    type: String,
    //required: true,
  },
  silverMealPrice: {
    type: String,
    //required: true,
  },
  silverCarDesc: {
    type: String,
  },
  silverCarPrice: {
    type: String,
    //required: true
  },
  silverAddInfo: {
    type: String,
    //required: true
  },
  goldPhotographyDesc: {
    type: String,
    //required: true,
  },
  goldPhotographyPrice: {
    type: String,
    //required: true,
  },
  goldHotelDesc: {
    type: String,
    //required: true,
  },
  goldHotelPrice: {
    type: String,
    //required: true,
  },
  goldMealDesc: {
    type: String,
    //required: true,
  },
  goldMealPrice: {
    type: String,
    //required: true,
  },
  goldCarDesc: {
    type: String,
  },
  goldCarPrice: {
    type: String,
    //required: true
  },
  goldAddInfo: {
    type: String,
    //required: true
  },
});

module.exports = mongoose.model("postTourUpdated2", tourSchemaUpdated);
