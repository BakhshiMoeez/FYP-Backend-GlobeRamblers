const ratingController = require("../controllers/ratingController");
const express = require("express");
const router = express.Router();

router.route("/").post(ratingController.setRatingOfSeller);

router.route("/:email").get(ratingController.getRatingOfSeller);

module.exports = router;
