const cloudinary = require("../helperFiles/cloudinaryConfig");
const bcrypt = require("bcrypt");
const connectDB = require("../helperFiles/DBconnection");
const Seller = require("../models/sellerSchema");

const defaultImage =
  "https://res.cloudinary.com/dij2y1ngq/image/upload/v1680706018/api_images/avatar_w7tmvt.jpg";

exports.getSellerByEmail = async (req, res) => {
  try {
    connectDB();
    const seller = await Seller.findOne({ email: req.body.email }).exec();
    console.log(seller);
    res.status(200).json(seller);
  } catch (err) {
    console.log(err.message);
  }
};

exports.Login = async (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  try {
    connectDB();
    const temp = await Seller.findOne({ email: req.body.email }).exec();
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

exports.SignUp = async (req, res) => {
  console.log(
    `${req.body.email} ${req.body.password} ${req.body.fname} ${req.body.lname}`
  );

  try {
    connectDB();
    const temp = await Seller.findOne({ email: req.body.email }).exec();
    if (temp) {
      console.log(temp);
      res.status(200).send({ message: "email already exists" });
    } else {
      const profileUrl = defaultImage;

      const hashedPass = await bcrypt.hash(req.body.password, 10);

      const buyer = new Seller({
        email: req.body.email,
        password: hashedPass,
        firstName: req.body.fname,
        lastName: req.body.lname,
        profilePic: profileUrl,
        phone: req.body.phone,
        address: req.body.address,
        creditCard: req.body.creditCardNumber,
        companyName: req.body.companyName,
        companyLocation: req.body.companyLocation,
        companyDescription: req.body.companayDescription,
      });

      const savedBuyer = await buyer.save();
      res.status(200).json(savedBuyer);
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateProfilePic = async (req, res) => {
  try {
    connectDB();
    const profilePicPath = req.body.profilePic;
    const seller = await Seller.findOneAndUpdate(
      { email: req.body.email },
      {
        profilePic: profilePicPath,
      }
    );

    res.status(200).send(seller.profilePic);
  } catch (err) {
    console.log(err.message);
  }
};
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
//             const temp = await Seller.findOne({ email: req.body.email }).exec();
//             if (temp) {
//               console.log(temp);
//               res.status(200).send({ message: "email already exists" });
//             } else {
//               console.log("Image Uploaded");
//               const profileUrl = result.secure_url;
//               console.log(result.secure_url);

//               const hashedPass = await bcrypt.hash(req.body.password, 10);

//               const buyer = new Seller({
//                 email: req.body.email,
//                 password: hashedPass,
//                 firstName: req.body.fname,
//                 lastName: req.body.lname,
//                 profilePic: profileUrl,
//                 phone: req.body.phone,
//                 address: req.body.address,
//                 creditCard: req.body.creditCardNumber,
//                 companyName: req.body.companyName,
//                 companyLocation: req.body.companyLocation,
//                 companyDescription: req.body.companayDescription,
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
