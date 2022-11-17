import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authentication";
import { Link } from "react-router-dom";
import emptyShoppingCartImage from "./shoppingCart.gif";
import "./style.css";
import ShoppingCartCard from "../../components/ShoppingCartCard";
const ShoppingCartPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <div className="shopping-cart-page-container">
        {/* {user?.cart.length === 0 && (
          <div className="shopping-cart-page-empty">
            <img src={emptyShoppingCartImage} alt="empty shopping cart" />
            <h1>Shopping cart is empty</h1>
            <h4>
              please add meals from <Link to="/"> HomePage</Link>
            </h4>
          </div>
        )} */}
        {/* header */}
        <header className="header-shopping-cart-container">
          <h1>Shopping Cart</h1>

          <div className="breadcrumb">
            <Link to="/">HomePage</Link>
          </div>

          <span className="count">items in the cart</span>
        </header>
        <div className="column-labels">
          <label className="shopping-cart-page-image">Image</label>
          <label className="shopping-cart-page-details">Product</label>
          <label className="shopping-cart-page-price">Price</label>
          <label className="shopping-cart-page-quantity">Quantity</label>
          <label className="shopping-cart-page-removal">Remove</label>
          <label className="shopping-cart-page-line-price">Total</label>
        </div>
        {user?.cart.map((meal) => (
          <ShoppingCartCard key={meal._id} />
        ))}
        <ShoppingCartCard />
        <ShoppingCartCard />
      </div>
    </>
  );
};
export default ShoppingCartPage;
