import express from "express";
import {
  createUser,
  getUser,
  login,
  authenticateToken,
  updateUser,
  getUserInfo,
  rateChef,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", authenticateToken, getUser);
userRouter.get("/:id", getUserInfo);
userRouter.post("/create", createUser);
userRouter.post("/login", login);
userRouter.post("/rate", rateChef);
userRouter.patch("/:id", updateUser);

export default userRouter;
