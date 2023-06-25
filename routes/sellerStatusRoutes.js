const express = require("express");
const router = express.Router();

const sellerStatusController = require("../controllers/sellerStatusController");

router.route("/").get(sellerStatusController.getAllSellerStatus);

router
  .route("/:email")
  .get(sellerStatusController.getSellerStatusByEmail)
  .post(sellerStatusController.updateSellerStatus);

module.exports = router;
