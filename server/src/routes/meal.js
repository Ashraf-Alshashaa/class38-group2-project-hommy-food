import express from "express";
import { createMeal, getMeals } from "../controllers/meal.js";

const mealRouter = express.Router();

mealRouter.get("/", getMeals);
mealRouter.post("/create", createMeal);

export default mealRouter;
