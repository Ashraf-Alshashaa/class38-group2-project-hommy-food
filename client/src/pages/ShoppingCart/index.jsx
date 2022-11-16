import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authentication";
import { Link } from "react-router-dom";
import emptyShoppingCartImage from "./shoppingCart.gif";
import "./style.css";
const ShoppingCartPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <div className="shopping-cart-page-container">
        {user?.cart.length === 0 && (
          <div className="shopping-cart-page-empty">
            <img src={emptyShoppingCartImage} alt="empty shopping cart" />
            <h1>Shopping cart is empty</h1>
            <h4>
              please add meals from <Link to="/"> HomePage</Link>
            </h4>
          </div>
        )}
      </div>
    </>
  );
};
export default ShoppingCartPage;
