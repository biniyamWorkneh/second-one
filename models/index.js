const mongoose = require("mongoose");
const schemaModel = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    foodPrice: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);
const Food = mongoose.model("Food", schemaModel);
module.exports = Food;
