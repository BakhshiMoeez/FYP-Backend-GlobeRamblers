const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.api.ping((error, result) => {
  if (error) {
    console.log("Cloudinary connection failed");
  } else {
    console.log("Cloudinary connection successful");
  }
});

module.exports = cloudinary;
