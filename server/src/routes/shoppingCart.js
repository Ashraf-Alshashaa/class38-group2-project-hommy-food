import express from "express";
import { authenticateToken } from "../controllers/user.js";
import {
  addToShoppingCart,
  increaseQuantityOfItem,
  decreaseQuantityOfItem,
  deleteItemFromShoppingCart,
  deleteShoppingCart,
} from "../controllers/shoppingCart.js";

const shoppingCardRouter = express.Router();

shoppingCardRouter.patch(
  "/shopping-cart/add-to-cart/:mealId",
  authenticateToken,
  addToShoppingCart
);
shoppingCardRouter.patch(
  "/shopping-cart/increase-quantity/:mealId",
  authenticateToken,
  increaseQuantityOfItem
);
shoppingCardRouter.patch(
  "/shopping-cart/decrease-quantity/:mealId",
  authenticateToken,
  decreaseQuantityOfItem
);
shoppingCardRouter.delete(
  "/shopping-cart/delete/item/:mealId",
  authenticateToken,
  deleteItemFromShoppingCart
);

shoppingCardRouter.delete(
  "/shopping-cart/delete",
  authenticateToken,
  deleteShoppingCart
);

export default shoppingCardRouter;
