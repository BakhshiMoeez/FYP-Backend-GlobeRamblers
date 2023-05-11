const express = require("express");
const router = express.Router();
const multer = require("multer");
const sellerController = require("../controllers/sellerController");

const upload = multer({ storage: multer.memoryStorage() });

router
  .route("/")
  .post(sellerController.getSellerByEmail)
  .put(sellerController.updateProfilePic)
  .patch(sellerController.updateSellerProfileInfo);

router.route("/login").post(sellerController.Login);

router
  .route("/signup")
  .post(upload.single("profilePic"), sellerController.SignUp);

module.exports = router;
