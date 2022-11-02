import express from "express";
import {
  createMeal,
  getMeals,
  searchMeals,
  filterMeals,
  updateMeal,
  deleteMeal,
  getMeal,
} from "../controllers/meal.js";

const mealRouter = express.Router();

mealRouter.get("/", getMeals);
mealRouter.post("/create", createMeal);
mealRouter.patch("/:id", updateMeal);
mealRouter.get("/:id", getMeal);
mealRouter.delete("/:id", deleteMeal);
mealRouter.get("/query", searchMeals); // meals/query?search=beef
mealRouter.get("/filter", filterMeals); // meals/filter?cuisine=Turkish&category=Vegan

export default mealRouter;
