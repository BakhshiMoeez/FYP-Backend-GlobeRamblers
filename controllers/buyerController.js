const cloudinary = require("../helperFiles/cloudinaryConfig");
const connectDB = require("../helperFiles/DBconnection");
const Buyer = require("../models/buyerSchema");

// Login controller for Buyer
exports.Login = (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  try {
    connectDB();
  } catch (err) {
    console.log(err.message);
  }
};

// SignUp controller for Buyer
exports.SignUp = async (req, res) => {
  console.log(
    `${req.body.email} ${req.body.password} ${req.body.fname} ${req.body.lname}`
  );

  try {
    connectDB();
    const result = await cloudinary.uploader
      .upload_stream(
        { resource_type: "auto", folder: "api_images" },
        async (error, result) => {
          if (error) {
            console.log(error);
            res.status(500).send({ message: "Failed to upload image" });
          } else {
            const temp = await Buyer.findOne({ email: req.body.email }).exec();
            if (temp) {
              console.log(temp);
              res.status(200).send({ message: "email already exists" });
            } else {
              console.log("Image Uploaded");
              const profileUrl = result.secure_url;
              console.log(result.secure_url);

              const buyer = new Buyer({
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.fname,
                lastName: req.body.lname,
                profilePic: profileUrl,
              });

              const savedBuyer = await buyer.save();
              res.status(200).json(savedBuyer);
            }
          }
        }
      )
      .end(req.file.buffer);
  } catch (err) {
    console.log(err.message);
  }
};
