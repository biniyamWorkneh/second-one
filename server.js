require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cookies = require("cookies")
const bodyParser = require("body-parser");
const apiRoute = require("./routes/index");

mongoose
  .connect(
    "mongodb+srv://biniyamworkneh777:bini1234@foods.dyeadv4.mongodb.net/?retryWrites=true&w=majority&appName=foods"
  )
  .then(() => {
    console.log("Database is connected Successfully");
    app.listen(3000, () => console.log("server started"));
  });
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", apiRoute);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
