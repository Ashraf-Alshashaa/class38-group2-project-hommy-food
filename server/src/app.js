import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";
import cuisineRouter from "./routes/cuisine.js";
import mealRouter from "./routes/meal.js";
import categoryRouter from "./routes/category.js";
import rateRouter from "./routes/rate.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);
app.use("/api/rate", rateRouter);
app.use("/api/meals", mealRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/rate", cuisineRouter);
export default app;
