const express = require("express");
const buyerController = require("../controllers/buyerController");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.route("/login").post(buyerController.Login);
router
  .route("/signup")
  .post(upload.single("profilePic"), buyerController.SignUp);

module.exports = router;
