import express from "express";
import {
  createOrderToPrepare,
  createOrderHistory,
  editStatus,
} from "../controllers/orders.js";
import { authenticateToken } from "../controllers/user.js";

const ordersRouter = express.Router();

ordersRouter.post("/to-prepare/:id", authenticateToken, createOrderToPrepare);
ordersRouter.post("/history", authenticateToken, createOrderHistory);
ordersRouter.patch("/edit-status", authenticateToken, editStatus);

export default ordersRouter;
