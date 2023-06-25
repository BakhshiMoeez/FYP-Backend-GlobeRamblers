const connectDB = require("../helperFiles/DBconnection");
const Seller = require("../models/sellerSchema");
const Rating = require("../models/ratingSchema");
const SellerStatus = require("../models/approvalSchema");

exports.getAllSellerStatus = async (req, res) => {
  try {
    connectDB();
    const sellerStatus = await SellerStatus.find({ status: "pending" });
    res.status(200).send(sellerStatus);
  } catch (err) {
    console.log(err);
  }
};

exports.updateSellerStatus = async (req, res) => {
  try {
    connectDB();

    const sellerEmail = req.params.email;

    const changedStatus = await SellerStatus.findOneAndUpdate(
      { email: sellerEmail },
      { status: req.body.status }
    );

    res.status(200).send(changedStatus);
  } catch (err) {
    console.log(err);
  }
};

exports.getSellerStatusByEmail = async (req, res) => {
  try {
    connectDB();
    const sellerEmail = req.params.email;
    const sellerStatus = await SellerStatus.findOne({ email: sellerEmail });
    if (!sellerStatus) {
      res.status(200).send({ status: "approved" });
    } else {
      res.status(200).send({ status: sellerStatus.status });
    }
  } catch (err) {
    console.log(err);
  }
};
