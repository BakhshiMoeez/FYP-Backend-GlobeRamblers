const connectDB = require("../helperFiles/DBconnection");
const paymentRecords = require("../models/paymentRecord");
const Seller = require("../models/sellerSchema");
const Buyer = require("../models/buyerSchema");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const pug = require("pug");
require("dotenv").config();

// exports.getPaymentDetails = async (req, res) => {
//   try {
//     connectDB();
//     const paymentDetails = await paymentRecors.find({}).exec();
//     res.status(200).json(paymentDetails);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// SendGrid
// "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",

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

exports.postPaymentDetails = async (req, res) => {
  try {
    connectDB();
    // const paymentDetails = await paymentRecords.create(req.body);
    const paymentCardData = {
      amount: req.body.amount,
      date: req.body.date,
      sellerEmail: req.body.sellerEmail,
      buyerEmail: req.body.buyerEmail,
      tourName: req.body.tourName,
    };
    const sellerQuery = { email: paymentCardData.sellerEmail };
    const seller = await Seller.findOne(sellerQuery);
    // res.status(200).send(seller);

    const buyerQuery = { email: paymentCardData.buyerEmail };
    const buyer = await Buyer.findOne(buyerQuery);
    // res.status(200).send(buyer);

    const paymentRecord = new paymentRecords({
      buyerName: buyer.firstName + " " + buyer.lastName,
      sellerName: seller.firstName + " " + seller.lastName,
      // buyerName: "Moeez Bakhshi",
      // sellerName: "Abdullah Nazim",

      amount: paymentCardData.amount,
      date: paymentCardData.date,
      tourName: paymentCardData.tourName,
    });
    console.log("buyerName: " + buyer.firstName + " " + buyer.lastName),
      console.log("sellerName: " + seller.firstName + " " + seller.lastName),
      await paymentRecord.save();

    const htmlForBuyer = pug.renderFile(`${__dirname}/emailTemplate.pug`, {
      heading: "Payment Successful",
      userName: paymentRecord.buyerName,
      notiName: paymentRecord.tourName,
      description1:
        "Congratulations! Your payment has been successfully processed against your card for the",
      description2:
        " tour. Your travel agent is " +
        paymentRecord.sellerName +
        "Their contact number is " +
        seller.phone +
        ". You can now enjoy your tour with us. Please feel free to contact us if you have any queries.",
    });

    const htmlForSeller = pug.renderFile(`${__dirname}/emailTemplate.pug`, {
      heading: "Tour Booked",
      userName: paymentRecord.sellerName,
      notiName: paymentRecord.tourName,
      description1:
        "Congratulations! Our customer " +
        paymentRecord.buyerName +
        " has purchased a package for ",
      description2:
        " tour. The Buyer contact number is " +
        buyer.phone +
        ". Give them the best service and get the best ratings to be in the top sellers. Please feel free to contact us if you have any queries.",
    });

    transporter.sendMail({
      to: paymentCardData.buyerEmail,
      from: "moeezbakhshi123456@gmail.com",
      subject: "Payment Successful",
      html: htmlForBuyer,
    });

    transporter.sendMail({
      to: paymentCardData.sellerEmail,
      from: "moeezbakhshi123456@gmail.com",
      subject: "Tour Booked",
      html: htmlForSeller,
    });

    res.status(201).json({
      status: "success",
      data: {
        paymentRecord,
      },
    });
    console.log(paymentCardData);
  } catch (err) {
    console.log(err.message);
  }
};

exports.getPaymentDetailsForAdmin = async (req, res) => {
  try {
    connectDB();
    const paymentRecords2 = await paymentRecords.find();
    res.status(200).send(paymentRecords2);
  } catch (err) {
    console.log(err);
  }
};
