import express from "express";
import {
  createUser,
  getUser,
  login,
  authenticateToken,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", authenticateToken, getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", login);

export default userRouter;
