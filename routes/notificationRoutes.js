const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.get("/", notificationController.getAllNotifications);
router.post("/", notificationController.createNotification);
router.get("/:id", notificationController.getNotificationById);

module.exports = router;
