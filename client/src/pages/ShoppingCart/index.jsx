import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authentication";
import emptyShoppingCartImage from "./Outline-gif-cart.gif";
import "./style.css";
import ShoppingCartCard from "../../components/ShoppingCartCard";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const { user, setUser } = useContext(AuthContext);

  // _________________Delete All______________________
  const { performFetch: performFetchDeleteAll } = useFetch(
    "/customer/shopping-cart/delete",
    (data) => setUser(data?.result)
  );
  const deleteAllHandle = () => {
    const token = localStorage.getItem("accessToken");
    performFetchDeleteAll({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  if (user?.cart.length === 0) {
    return (
      <div className="shopping-cart-page-empty">
        <img src={emptyShoppingCartImage} alt="empty shopping cart" />
        <h1>Shopping cart is empty</h1>
        <h4>
          please add meals from <Link to="/"> HomePage</Link>
        </h4>
      </div>
    );
  } else {
    return (
      <>
        <div className="shopping-cart-page-container">
          <div className="header-shopping-cart-container">
            <h1>Shopping Cart</h1>

            <div className="breadcrumb">
              <button
                className="shopping-cart-delete-btn"
                onClick={deleteAllHandle}
              >
                Delete All
              </button>
            </div>

            <span className="shopping-cart-count">
              {user?.cart?.length} items in the cart
            </span>
          </div>
          <div className="header_fixed">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                  <th>Total</th>
                </tr>
              </thead>

              {user?.cart.map((item) => (
                <ShoppingCartCard
                  key={item.mealId._id}
                  image={item.mealId.image}
                  title={item.mealId.title}
                  price={item.mealId.price}
                  quantity={item.quantity}
                  mealId={item.mealId._id}
                />
              ))}
            </table>
          </div>
          <div className="checkout-div">
            <Link className="shopping-cart-checkout-btn" to="/checkout">
              CheckOut
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default ShoppingCartPage;
