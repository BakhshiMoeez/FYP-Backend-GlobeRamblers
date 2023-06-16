const Ratings = require("../models/ratingSchema");
const connectDB = require("../helperFiles/DBconnection");
const { ObjectId } = require("mongodb");

exports.getTopRatedSellers = async (req, res) => {
  try {
    connectDB();
    console.log("Hello from get top rated sellers");
    const ratings = await Ratings.find();
    console.log("Rating total info: ", ratings);
    res.status(200).send(ratings);
  } catch (err) {
    console.log("error from get top seller:", err.message);
  }
};

exports.setRatingOfSeller = async (req, res) => {
  try {
    connectDB();
    const sellerEmail = req.body.sellerEmail;
    const starRating = req.body.starRating;

    console.log(sellerEmail);
    console.log(starRating);

    const rating = await Ratings.findOne({ sellerEmail: sellerEmail });

    console.log("overallRating: ", rating.overallRatings);

    var newRating = 0;
    const temp = parseFloat(rating.overallRatings, 10);

    if (temp <= 5) {
      console.log("temp: ", temp);

      if (starRating === 1) {
        newRating = temp - 0.2;
      }
      if (starRating === 2) {
        newRating = temp - 0.1;
      }
      if (starRating === 3) {
        newRating = temp + 0.0;
      }
      if (starRating === 4) {
        newRating = temp + 0.1;
      }
      if (starRating === 5) {
        newRating = temp + 0.1;
      }
      if (starRating === 0) {
        newRating = temp;
      }

      if (newRating > 5) {
        newRating = 5;
      }
      if (newRating < 0) {
        newRating = 0;
      }

      newRating = newRating.toFixed(1);
      console.log("New Rating: ", newRating);

      const result = await Ratings.findOneAndUpdate(
        { sellerEmail: sellerEmail },
        { overallRatings: newRating.toString() }
      );

      result.save();

      res.status(201).send(newRating.toString());
    }
  } catch (err) {
    console.log("error from change ratings", err.message);
  }
};

exports.getRatingOfSeller = async (req, res) => {
  try {
    const sellerEmail = req.params.email;
    connectDB();
    const result = await Ratings.findOne({ sellerEmail: sellerEmail });

    res.status(201).send(result.overallRatings);
  } catch (err) {
    console.log("error from get ratings of seller:", err.message);
  }
};
