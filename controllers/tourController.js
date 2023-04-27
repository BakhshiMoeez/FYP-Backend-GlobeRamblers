const connectDB = require("../helperFiles/DBconnection");
const Tour = require("../models/tourSchema");

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

exports.getTourById = (req, res) => {};

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
