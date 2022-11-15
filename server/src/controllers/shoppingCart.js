import User from "../models/User.js";
import { logError } from "../util/logging.js";

export const addToShoppingCart = async (req, res) => {
  const email = req.user;
  const { mealId } = req.params;
  try {
    await User.findOneAndUpdate(
      { email: email },
      { $push: { cart: { mealId, quantity: 1 } } }
    );
    const updatedUser = await User.find({ email: email })
      .populate({ path: "cart.mealId", select: "title image price quantity" })
      .exec();
    res.status(200).json({ success: true, result: updatedUser[0] });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update shopping cart, try again later",
    });
  }
};
export const increaseQuantityOfItem = async (req, res) => {
  const email = req.user;
  const { mealId } = req.params;
  try {
    await User.findOneAndUpdate(
      { email: email },
      { $inc: { "cart.$[item].quantity": 1 } },
      { arrayFilters: [{ "item.mealId": mealId }] }
    );
    const updatedUser = await User.find({ email: email })
      .populate({ path: "cart.mealId", select: "title image price quantity" })
      .exec();
    res.status(200).json({ success: true, result: updatedUser[0] });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update shopping cart, try again later",
    });
  }
};
export const decreaseQuantityOfItem = async (req, res) => {
  const email = req.user;
  const { mealId } = req.params;
  try {
    await User.findOneAndUpdate(
      { email: email },
      { $inc: { "cart.$[item].quantity": -1 } },
      { arrayFilters: [{ "item.mealId": mealId }] }
    );
    const updatedUser = await User.find({ email: email })
      .populate({ path: "cart.mealId", select: "title image price quantity" })
      .exec();
    res.status(200).json({ success: true, result: updatedUser[0] });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update shopping cart, try again later",
    });
  }
};

export const deleteItemFromShoppingCart = async (req, res) => {
  const email = req.user;
  const { mealId } = req.params;
  try {
    await User.findOneAndUpdate(
      { email: email },
      { $pull: { cart: { mealId: mealId } } }
    );
    const updatedUser = await User.find({ email: email })
      .populate({ path: "cart.mealId", select: "title image price quantity" })
      .exec();
    res.status(200).json({ success: true, result: updatedUser[0] });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to update shopping cart, try again later",
    });
  }
};
export const deleteShoppingCart = async (req, res) => {
  const email = req.user;
  try {
    await User.findOneAndUpdate({ email: email }, { cart: [] });
    const updatedUser = await User.find({ email: email });
    res.status(200).json({ success: true, result: updatedUser[0] });
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to delete shopping cart, try again later",
    });
  }
};
