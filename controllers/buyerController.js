//const cloudinary = require("../helperFiles/cloudinaryConfig");
const connectDB = require("../helperFiles/DBconnection");
const Buyer = require("../models/buyerSchema");
const bcrypt = require("bcrypt");

const defaultImage =
  "https://res.cloudinary.com/dij2y1ngq/image/upload/v1680706018/api_images/avatar_w7tmvt.jpg";

exports.updateProfileInfo = (req, res) => {};

// Login controller for Buyer
exports.Login = async (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  try {
    connectDB();
    const temp = await Buyer.findOne({ email: req.body.email }).exec();
    if (temp) {
      const validPass = await bcrypt.compare(req.body.password, temp.password);
      if (validPass) {
        res.status(200).send({ message: "Login Successful" });
      } else {
        res.status(200).send({ message: "invalid password" });
      }
    } else {
      res.status(200).send({ message: "email does not exist" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

// New SignUp controller for Buyer
exports.SignUp = async (req, res) => {
  console.log(
    `${req.body.email} ${req.body.password} ${req.body.fname} ${req.body.lname}`
  );

  try {
    connectDB();
    const temp = await Buyer.findOne({ email: req.body.email });
    if (temp) {
      console.log(temp);
      res.status(200).send({ message: "email already exists" });
    } else {
      const hashedPass = await bcrypt.hash(req.body.password, 10);

      const buyer = new Buyer({
        email: req.body.email,
        password: hashedPass,
        firstName: req.body.fname,
        lastName: req.body.lname,
        profilePic: defaultImage,
        phone: req.body.phone,
        address: req.body.address,
      });

      const savedBuyer = await buyer.save();
      res.status(200).json(savedBuyer);
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Getting info of Buyer from Primary Key (email address)
exports.getBuyerByEmail = async (req, res) => {
  try {
    connectDB();
    const buyer = await Buyer.findOne({ email: req.body.email }).exec();
    //console.log(buyer);
    res.status(200).json(buyer);
  } catch (err) {
    console.log(err.message);
  }
};

// Buyer controller to change the profile pic of Buyer
exports.updateBuyerProfilePic = async (req, res) => {
  try {
    connectDB();
    const profilePicPath = req.body.profilePic;
    const buyer = await Buyer.findOneAndUpdate(
      { email: req.body.email },
      {
        profilePic: profilePicPath,
      }
    );

    res.status(200).send(buyer.profilePic);
  } catch (err) {
    console.log(err.message);
  }
};

// SignUp controller for Buyer
// exports.SignUp = async (req, res) => {
//   console.log(
//     `${req.body.email} ${req.body.password} ${req.body.fname} ${req.body.lname}`
//   );

//   try {
//     connectDB();
//     const result = await cloudinary.uploader
//       .upload_stream(
//         { resource_type: "auto", folder: "api_images" },
//         async (error, result) => {
//           if (error) {
//             console.log(error);
//             res.status(500).send({ message: "Failed to upload image" });
//           } else {
//             const temp = await Buyer.findOne({ email: req.body.email }).exec();
//             if (temp) {
//               console.log(temp);
//               res.status(200).send({ message: "email already exists" });
//             } else {
//               console.log("Image Uploaded");
//               const profileUrl = result.secure_url;
//               console.log(result.secure_url);

//               const hashedPass = await bcrypt.hash(req.body.password, 10);

//               const buyer = new Buyer({
//                 email: req.body.email,
//                 password: hashedPass,
//                 firstName: req.body.fname,
//                 lastName: req.body.lname,
//                 profilePic: profileUrl,
//               });

//               const savedBuyer = await buyer.save();
//               res.status(200).json(savedBuyer);
//             }
//           }
//         }
//       )
//       .end(req.file.buffer);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
