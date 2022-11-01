import Meal from "../models/Meal.js";
import { logError } from "../util/logging.js";

export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json({ success: true, result: meals });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get meals, try again later" });
  }
};

export const createMeal = async (req, res) => {
  try {
    const meal = req.body;

    if (typeof meal !== "object") {
      res.status(400).json({
        success: false,
        msg: `You need to provide a 'meal' object. Received: ${JSON.stringify(
          meal
        )}`,
      });

      return;
    }
    const newMeal = await Meal.create(meal);

    res.status(201).json({ success: true, meal: newMeal });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to create meal, try again later" });
  }
};
