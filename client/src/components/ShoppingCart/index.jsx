import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const ShoppingCart = ({ id, chefId }) => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);

  const findChef = user?.cart?.map((element) => element.mealId?.chefId);
  const chefIdToString = findChef?.toString();

  const handleClickCart = async () => {
    if (chefId === user?._id) {
      window.alert("you are a chef");
    }
    if (!chefIdToString || chefId === chefIdToString) {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch(
          // `${process.env.BASE_SERVER_URL}/api/customer/shopping-cart/delete`,
          `${process.env.BASE_SERVER_URL}/api/customer/shopping-cart/add-to-cart/${id}`,
          {
            method: "PATCH",
            // method: "DELETE",
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
      // <popup message Sorry you can't order from a different chef />
      return;
    }
  };

  return (
    <div className="shopping-cart-container">
      {user ? (
        <>
          <button
            className="shopping-cart-btn-enable"
            onClick={handleClickCart}
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
    </div>
  );
};

ShoppingCart.propTypes = {
  id: PropTypes.string.isRequired,
  chefId: PropTypes.string,
};

export default ShoppingCart;
