const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

module.exports = app;
