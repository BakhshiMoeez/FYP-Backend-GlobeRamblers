exports.Login = (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  res.status(200).json({
    status: "success",
  });
};

exports.SignUp = (req, res) => {
  console.log(`${req.body.email} ${req.body.password}`);
  res.status(200).json({
    status: "success",
  });
};
