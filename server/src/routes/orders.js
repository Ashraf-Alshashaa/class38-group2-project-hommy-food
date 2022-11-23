import express from "express";
import {
  createOrderToPrepare,
  createOrderHistory,
} from "../controllers/orders.js";
import { authenticateToken } from "../controllers/user.js";

const ordersRouter = express.Router();

ordersRouter.post("/to-prepare", authenticateToken, createOrderToPrepare);
ordersRouter.post("/history", authenticateToken, createOrderHistory);

export default ordersRouter;
