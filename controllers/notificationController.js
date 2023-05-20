const Notification = require("../models/notifications");
const connectDB = require("../helperFiles/DBconnection");
const { ObjectId } = require("mongodb");

exports.getAllNotifications = async (req, res) => {
  try {
    connectDB();
    const notifications = await Notification.find();
    res.status(200).send(notifications);
    console.log(notifications);
  } catch (err) {
    console.log(err.message);
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    connectDB();
    const notification = await Notification.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.status(200).send(notification);
  } catch (err) {
    console.log(err.message);
  }
};

exports.createNotification = async (req, res) => {
  try {
    connectDB();
    const title = req.body.title;
    const description = req.body.description;

    const notification = new Notification({
      title: title,
      desc: description,
    });

    const result = await notification.save();
    console.log(result);
    res.status(201).send("Notification created successfully");
  } catch (err) {
    console.log(err.message);
  }
};
