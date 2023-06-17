const connectDB = require("../helperFiles/DBconnection");
const Tour = require("../models/tourSchemaUpdated");
const Seller = require("../models/sellerSchema");
const { ObjectId } = require("mongodb");

exports.getAllToursBySellerEmail = async (req, res) => {
  try {
    const email = req.params.email;
    connectDB();
    const tours = await Tour.find({ email: email });
    res.status(200).send(tours);
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateTour = async (req, res) => {
  try {
    connectDB();

    const tour = {
      source: req.body.source,
      destination: req.body.destination,
      email: req.body.sellerEmail,
      sellerProfilePic: req.body.sellerProfilePic,
      title: req.body.title,
      description: req.body.description,
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
      bronzeAddtInfo: req.body.bronzeAddInfo,
      silverPhotographyDesc: req.body.silverPhotographyDesc,
      silverPhotographyPrice: req.body.silverPhotographyPrice,
      silverHotelDesc: req.body.silverHotelDesc,
      silverHotelPrice: req.body.silverHotelPrice,
      silverMealDesc: req.body.silverMealDesc,
      silverMealPrice: req.body.silverMealPrice,
      silverCarDesc: req.body.silverCarDesc,
      silverCarPrice: req.body.silverCarPrice,
      silverAddInfo: req.body.silverAddInfo,
      goldPhotographyDesc: req.body.goldPhotographyDesc,
      goldPhotographyPrice: req.body.goldPhotographyPrice,
      goldHotelDesc: req.body.goldHotelDesc,
      goldHotelPrice: req.body.goldHotelPrice,
      goldMealDesc: req.body.goldMealDesc,
      goldMealPrice: req.body.goldMealPrice,
      goldCarDesc: req.body.goldCarDesc,
      goldCarPrice: req.body.goldCarPrice,
      goldAddInfo: req.body.goldAddInfo,
    };

    const result = await Tour.findOneAndUpdate(
      { _id: new ObjectId(req.params.email) },
      tour
    );

    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteTour = async (req, res) => {
  try {
    connectDB();
    console.log("Hello From DeleteTour: ", new ObjectId(req.params.email));
    const result = await Tour.findByIdAndDelete({
      _id: new ObjectId(req.params.email),
    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
};
