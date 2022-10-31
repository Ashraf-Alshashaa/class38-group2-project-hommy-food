import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  chefId: { type: mongoose.ObjectId, ref: "User" },
  title: { type: String, required: true, lowercase: true },
  ingredients: [String],
  image: String,
  category: { type: String, required: true },
  cuisine: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true, default: false },
  quantity: Number,
});

const Meal = new mongoose.model("meals", mealSchema);
export default Meal;
