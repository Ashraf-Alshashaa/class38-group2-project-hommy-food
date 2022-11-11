import express from "express";
import { getRate, postRate } from "../controllers/rate.js";
import { authenticateToken } from "../controllers/user.js";

const rateRouter = express.Router();

rateRouter.get("/:id", getRate);
rateRouter.post("/", authenticateToken, postRate);

export default rateRouter;
