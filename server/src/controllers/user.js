import User, { validateUser } from "../models/User.js";
import { logError } from "../util/logging.js";
import validationErrorMessage from "../util/validationErrorMessage.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const email = req.user;
  try {
    const user = await User.findOne({ email: email }, { password: false });
    res.status(200).json({ success: true, user: user });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get user, try again later" });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;

    if (typeof user !== "object") {
      res.status(400).json({
        success: false,
        msg: `You need to provide a 'user' object. Received: ${JSON.stringify(
          user
        )}`,
      });

      return;
    }

    const errorList = validateUser(user);

    if (errorList.length > 0) {
      res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    } else {
      const { userName, email, password, isChef } = user;
      const hashedPassword = await bcrypt.hash(password, 10);
      const userInfo = {
        userName: userName,
        email: email,
        password: hashedPassword,
        isChef: isChef,
      };
      const newUser = await User.create(userInfo);

      res.status(201).json({ success: true, user: newUser });
    }
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      error: error,
      msg: "Unable to create the user",
    });
  }
};

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email.trim().length === 0) {
    res.status(400).json({ success: false, msg: "please fill in the email" });
    return;
  }

  if (password.trim().length === 0) {
    res
      .status(400)
      .json({ success: false, msg: "please fill in the password" });
    return;
  }

  try {
    const user = await User.findOne({ email: email });
    if (user === null) {
      res
        .status(401)
        .json({ success: false, msg: "email or password is incorrect" });
    } else {
      const result = await bcrypt.compare(password, user.password);
      if (result !== true) {
        res
          .status(401)
          .json({ success: false, msg: "email or password is incorrect" });
      } else {
        const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
        const userData = await User.findOne(
          { email: email },
          { password: false }
        );
        res
          .status(201)
          .json({ success: true, user: userData, accessToken: accessToken });
      }
    }
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to login, try again later" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await User.findByIdAndUpdate(id, req.body);
    const updatedUser = await User.findById(id);
    res.status(200).json({ success: true, result: updatedUser });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to update user, try again later" });
  }
};
