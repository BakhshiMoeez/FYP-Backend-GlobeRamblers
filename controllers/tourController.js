const connectDB = require("../helperFiles/DBconnection");
const Tour = require("../models/tourSchemaUpdated");
const { ObjectId } = require("mongodb");

exports.getAllTours = async (req, res) => {
  try {
    connectDB();
    const tour = await Tour.find();
    console.log(tour);
    res.status(200).send(tour);
  } catch (err) {
    console.log(err.message);
  }
};

exports.getTourById = async (req, res) => {
  try {
    connectDB();
    const tour = await Tour.findOne({ _id: new ObjectId(req.params.id) });
    res.status(200).send(tour);
  } catch (err) {
    console.log(err.message);
  }
};

exports.addNewTour = async (req, res) => {
  try {
    connectDB();
    const tour = new Tour({
      email: req.body.sellerEmail,
      sellerProfilePic: req.body.sellerProfilePic,
      title: req.body.title,
      description: req.body.desc,
      coverImage: req.body.coverImage,
      basePrice: req.body.basePrice,
      bronzePhotographyDesc: req.body.bronzePhotographyDesc,
      bronzePhotographyPrice: req.body.bronzePhotographyPrice,
      bronzeHotelDesc: req.body.bronzeHotelDesc,
      bronzeHotelPrice: req.body.bronzeHotelPrice,
      bronzeMealDesc: req.body.bronzeMealDesc,
      bronzeMealPrice: req.body.bronzeMealPrice,
      bronzeCarDesc: req.body.bronzeCarDesc,
      bronzeCarPrice: req.body.bronzeCarPrice,
      bronzeAddtionalInfo: req.body.bronzeAddtionalInfo,
      silverPhotographyDesc: req.body.silverPhotographyDesc,
      silverPhotographyPrice: req.body.silverPhotographyPrice,
      silverHotelDesc: req.body.silverHotelDesc,
      silverHotelPrice: req.body.silverHotelPrice,
      silverMealDesc: req.body.silverMealDesc,
      silverMealPrice: req.body.silverMealPrice,
      silverCarDesc: req.body.silverCarDesc,
      silverCarPrice: req.body.silverCarPrice,
      silverAddtionalInfo: req.body.silverAddtionalInfo,
      goldPhotographyDesc: req.body.goldPhotographyDesc,
      goldPhotographyPrice: req.body.goldPhotographyPrice,
      goldHotelDesc: req.body.goldHotelDesc,
      goldHotelPrice: req.body.goldHotelPrice,
      goldMealDesc: req.body.goldMealDesc,
      goldMealPrice: req.body.goldMealPrice,
      goldCarDesc: req.body.goldCarDesc,
      goldCarPrice: req.body.goldCarPrice,
      goldAddtionalInfo: req.body.goldAddtionalInfo,
    });
    await tour.save();
    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
