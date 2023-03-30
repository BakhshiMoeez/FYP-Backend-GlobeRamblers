const cloudinary = require("../helperFiles/cloudinaryConfig");

exports.Login = (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  res.status(200).json({
    status: "success",
  });
};

exports.SignUp = (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  cloudinary.uploader
    .upload_stream(
      { resource_type: "auto", folder: "api_images" },
      (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Failed to upload image" });
        } else {
          console.log("Image Uploaded");
          // Return Cloudinary URL
          res.send({ url: result.secure_url });
        }
      }
    )
    .end(req.file.buffer);
};
