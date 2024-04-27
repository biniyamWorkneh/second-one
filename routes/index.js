const express = require("express");
const app = express();
const routes = express.Router();
const Foods = require("../models/index");

routes.post("/add-food", async (req, res) => {
  const createFood = await Foods.create({ ...req.body });
  res.json(createFood);
});

routes.get("/get-food", async (req, res) => {
  const fetchedFood = await Foods.find().sort({ createdAt: -1 });
  res.json(fetchedFood);
});

routes.patch("/update-food", async (req, res) => {
  const updatedFood = await Foods.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $set: { foodPrice: req.body.foodPrice },
    }
  );
  res.json(updatedFood);
});
routes.delete("/delete-food", async (req, res) => {
  const deletedFood = await Foods.findByIdAndDelete({ _id: req.body._id });
  res.json({ message: "Deleted Successfully!" });
});
module.exports = routes;
