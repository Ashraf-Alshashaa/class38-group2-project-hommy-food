import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";
import { MsgPopupContext } from "../../contexts/msgPopup";
import useFetch from "../../hooks/useFetch";

const ShoppingCart = ({ id, chefId }) => {
  const { user, setUser } = useContext(AuthContext);
  const { setPopup } = useContext(MsgPopupContext);
  const { performFetch } = useFetch(
    `/customer/shopping-cart/add-to-cart/${id}`,
    (data) => setUser(data?.result)
  );
  const navigate = useNavigate();

  const handleCartClick = () => {
    const chefIdInCart = user?.cart[0]?.mealId?.chefId;
    const findMeal = user?.cart?.filter((meal) => meal.mealId._id === id);
    const totalQuantity = findMeal[0]?.mealId?.quantity;
    const orderedQuantity = findMeal[0]?.quantity;
    if (chefId === user?._id) {
      return;
    }
    if (!chefIdInCart || chefId === chefIdInCart) {
      if (!orderedQuantity || totalQuantity > orderedQuantity) {
        const token = localStorage.getItem("accessToken");
        performFetch({
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setPopup({
          type: "success",
          text: "The meal added to cart",
          open: true,
        });
      } else {
        setPopup({
          type: "error",
          text: "No more available quantity",
          open: true,
        });
      }
    } else {
      setPopup({
        type: "error",
        text: "Sorry! you can't order from a different chef",
        open: true,
      });
    }
  };

  const handleRedirect = () => {
    setTimeout(() => {
      navigate("/login");
    }, "3000");
    return setPopup({
      type: "error",
      text: "Sorry! you need to login",
      open: true,
    });
  };

  return (
    <div className="shopping-cart-container">
      {user ? (
        <>
          <button
            className="shopping-cart-btn-enable"
            onClick={handleCartClick}
          >
            <i className="fa-solid fa-cart-shopping faa-xl"></i>
          </button>
        </>
      ) : (
        <>
          <button
            className="shopping-cart-btn-disable"
            onClick={handleRedirect}
          >
            <i className="fa-solid fa-cart-shopping faa-xl"></i>
          </button>
        </>
      )}
    </div>
  );
};

ShoppingCart.propTypes = {
  id: PropTypes.string.isRequired,
  chefId: PropTypes.string,
};

export default ShoppingCart;
