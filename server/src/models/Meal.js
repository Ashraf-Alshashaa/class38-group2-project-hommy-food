import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const mealSchema = new mongoose.Schema({
  chefId: { type: mongoose.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  ingredients: [String],
  image: String,
  category: { type: mongoose.ObjectId, ref: "Category" },
  cuisine: { type: mongoose.ObjectId, ref: "Cuisine" },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true, default: false },
  quantity: Number,
});

const Meal = new mongoose.model("meals", mealSchema);

export const validateMeal = (mealObject) => {
  const errorList = [];
  const allowedKeys = [
    "title",
    "ingredients",
    "image",
    "category",
    "cuisine",
    "price",
    "isAvailable",
    "quantity",
    "chefId",
  ];

  const validatedKeysMessage = validateAllowedFields(mealObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (mealObject.title == null) {
    errorList.push("title is a required field");
  }

  if (mealObject.chefId == null) {
    errorList.push("chefId is a required field");
  }
  if (mealObject.cuisine == null) {
    errorList.push("cuisine is a required field");
  }
  if (mealObject.price == null) {
    errorList.push("price is a required field");
  }
  if (mealObject.isAvailable == null) {
    errorList.push("isAvailable is a required field");
  }

  return errorList;
};

export default Meal;
