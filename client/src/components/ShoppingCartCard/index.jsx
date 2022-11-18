import React from "react";
import propTypes from "prop-types";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authentication";
import useFetch from "../../hooks/useFetch";
const ShoppingCartCard = ({ image, title, price, quantity, mealId }) => {
  const total = quantity * price;
  const { setUser } = useContext(AuthContext);
  // ____________________DecreaseQuantity_________________________
  const { performFetch: performFetchDecreaseQuantity } = useFetch(
    `/customer/shopping-cart/decrease-quantity/${mealId}`,
    (data) => setUser(data?.result)
  );
  const handleDecreaseClick = () => {
    const token = localStorage.getItem("accessToken");
    performFetchDecreaseQuantity({
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  // ____________________IncreaseQuantity_________________________
  const { performFetch: performFetchIncreaseQuantity } = useFetch(
    `/customer/shopping-cart/increase-quantity/${mealId}`,
    (data) => setUser(data?.result)
  );
  const handleIncreaseClick = () => {
    const token = localStorage.getItem("accessToken");
    performFetchIncreaseQuantity({
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  // ____________________RemoveOneMeal_________________________
  const { performFetch: performFetchRemoveOne } = useFetch(
    `/customer/shopping-cart/delete/item/${mealId}`,
    (data) => setUser(data?.result)
  );
  const handleRemoveClick = () => {
    const token = localStorage.getItem("accessToken");
    performFetchRemoveOne({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <tbody>
      <tr>
        {/* <td>1</td> */}
        <td>
          <img src={image} alt={title} />
        </td>
        <td>{title}</td>
        <td>{price}</td>
        <td className="item-quantity">
          <div className="increase-decrease">
            <button className="shopping-cart-btn" onClick={handleIncreaseClick}>
              +
            </button>
            <div className="show-quantity">{quantity}</div>
            <button className="shopping-cart-btn" onClick={handleDecreaseClick}>
              -
            </button>
          </div>
        </td>
        <td>
          <button className="remove-product" onClick={handleRemoveClick}>
            remove
          </button>
        </td>
        <td>€ {total}</td>
      </tr>
    </tbody>
  );
};
ShoppingCartCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  quantity: propTypes.number,
  price: propTypes.number,
  mealId: propTypes.string,
  total: propTypes.string,
};
export default ShoppingCartCard;
