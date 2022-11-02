import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create", createUser);
userRouter.get("/:id", getUser);
userRouter.patch("/:id", updateUser);

export default userRouter;
