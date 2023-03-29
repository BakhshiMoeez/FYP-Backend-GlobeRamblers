const multer = require("multer");

exports.Login = (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  res.status(200).json({
    status: "success",
  });
};

exports.SignUp = (req, res) => {
  console.log(
    `${req.body.email} ${req.body.password} ${req.body.fname} ${req.body.lname}`
  );
  res.status(200).json({
    status: "success",
  });
};
