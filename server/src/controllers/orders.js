import { logError } from "../util/logging";
import User from "../models/User.js";

export const createOrderToPrepare = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndUpdate(id, {
      $push: {
        orderToPrepare: req.body,
      },
    });
    res.status(200).json({ success: true, result: "Order is posted" });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable post order now, try again later" });
  }
};

export const createOrderHistory = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndUpdate(id, {
      $push: {
        orderHistory: req.body,
      },
    });

    const updatedUser = await User.findByIdAndUpdate(id);
    res.status(200).json({ success: true, result: updatedUser });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable post order now, try again later" });
  }
};
