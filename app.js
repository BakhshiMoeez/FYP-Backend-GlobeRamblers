const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const sellerRoutes = require("./routes/sellerRoutes");
const buyerRoutes = require("./routes/buyerRoutes");
const tourRoutes = require("./routes/tourRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const Buyer = require("./models/buyerSchema");
const connectDB = require("./helperFiles/DBconnection");
const tourSchemaUpdated = require("./models/tourSchemaUpdated");
const app = express();

// cross origin resource sharing
app.use(cors());

// handle form data
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// handle json data
app.use(express.json());

app.use("/api/seller", sellerRoutes);
app.use("/api/buyer", buyerRoutes);
app.use("/api/tour", tourRoutes);
app.use("/api/notification", notificationRoutes);

// CODE TO DELETE ENTRIES FROM TABLE
// deletee();
// async function deletee() {
//   try {
//     await connectDB();
//     const res = await tourSchemaUpdated.deleteMany({});
//     console.log(res);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

module.exports = app;
