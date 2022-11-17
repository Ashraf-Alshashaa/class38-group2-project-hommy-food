import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import ShoppingCartPopUp from "../ShoppingCartPopUp";
import "./style.css";

const ShoppingCart = ({ id, chefId }) => {
  const { user, setUser } = useContext(AuthContext);
  const [closeModal, setCloseModal] = useState(false);
  const navigate = useNavigate();

  const findChef = user?.cart?.map((element) => element.mealId?.chefId);
  const chefIdToString = findChef?.toString();

  const handleCartClick = async () => {
    if (chefId === user?._id) {
      return;
    }
    if (!chefIdToString || chefId === chefIdToString) {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch(
          `${process.env.BASE_SERVER_URL}/api/customer/shopping-cart/add-to-cart/${id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setUser(data.result);
      } catch (error) {
        window.alert("sorry something went wrong");
      }
    } else {
      return setCloseModal(true);
    }
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
            onClick={() => navigate("/login")}
          >
            <i className="fa-solid fa-cart-shopping faa-xl"></i>
          </button>
        </>
      )}
      <>
        {closeModal ? (
          <ShoppingCartPopUp setCloseModal={setCloseModal} />
        ) : null}
      </>
    </div>
  );
};

ShoppingCart.propTypes = {
  id: PropTypes.string.isRequired,
  chefId: PropTypes.string,
};

export default ShoppingCart;
