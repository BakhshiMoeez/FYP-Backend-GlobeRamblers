const express = require("express");
const router = express.Router();

const sellerController = require("../controllers/sellerController");

router.route("/login").post(sellerController.Login);
router.route("/signup").post(sellerController.SignUp);

module.exports = router;
