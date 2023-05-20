const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

module.exports = mongoose.model("Notification", notificationSchema);
