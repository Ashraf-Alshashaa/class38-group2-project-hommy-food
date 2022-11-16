import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const ShoppingCart = ({ id, chefId }) => {
  const { setUser } = useContext(AuthContext);
  const [addToCart] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch(
          `${process.env.BASE_SERVER_URL}/add-to-cart/${id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ mealId: id }),
          }
        );
        setUser(response.result);
      } catch (error) {
        // console.log("sorry something went wrong");
        // console.log(error.msg);
      }
    })();
  }, []);

  // const handleClickCart = () => {
  //   if (!user) {
  //     navigate("/login");
  //   } else {
  //     return;
  //   }
  // };

  return (
    <div className="shopping-cart-container">
      {chefId === addToCart ? (
        <button className="shopping-cart-btn-disable">
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
      ) : (
        <button
          className="shopping-cart-btn-enable"
          onClick={() => navigate("/login")}
        >
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
      )}
    </div>
  );
};

ShoppingCart.propTypes = {
  id: PropTypes.string.isRequired,
  chefId: PropTypes.string,
};

export default ShoppingCart;
