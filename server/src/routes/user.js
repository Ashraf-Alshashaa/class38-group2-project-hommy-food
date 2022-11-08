import express from "express";
import {
  createUser,
  getUser,
  login,
  authenticateToken,
  updateUser,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", authenticateToken, getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", login);
userRouter.patch("/:id", updateUser);

export default userRouter;
