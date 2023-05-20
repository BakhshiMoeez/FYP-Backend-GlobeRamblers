const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: string,
  desc: string,
});

module.exports = mongoose.model("Notification", notificationSchema);
