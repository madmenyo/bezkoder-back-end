const mongoose = require("mongoose");

const Adress = mongoose.model(
  "Adress",
  new mongoose.Schema({
    line1: String,
    line2: String,
    postal: String,
    city: String
  })
);