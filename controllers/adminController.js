const connectDB = require("../helperFiles/DBconnection");
const Buyer = require("../models/buyerSchema");
const Seller = require("../models/sellerSchema");
const Payment = require("../models/paymentRecord");

exports.getAdminPanelCredentials = async (req, res) => {
  try {
    connectDB();
    const buyers = await Buyer.find({});
    const sellers = await Seller.find({});
    const payments = await Payment.find({});

    const noOfBuyers = buyers.length;
    const noOfSellers = sellers.length;
    const noOfPayments = payments.length;

    res.status(200).send({ noOfBuyers, noOfSellers, noOfPayments });
  } catch (err) {
    console.log(err.message);
  }
};
