const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourUpdateDelete");

router
  .route("/:email")
  .get(tourController.getAllToursBySellerEmail)
  .post(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
