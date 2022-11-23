import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/authentication.js";
import { MsgPopupContext } from "../../contexts/msgPopup.js";
import { useLocation, useNavigate } from "react-router-dom";
import mastercard from "../../../public/images/mastercard_icon.png";
import ideal from "../../../public/images/ideal_icon.png";
import visa from "../../../public/images/visa_icon.png";
import cash from "../../../public/images/cash_money_icon.png";
import paymentCard from "../../../public/images/payment_card_icon.png";
import euro from "../../../public/images/euro_icon.png";
import StripeCheckout from "react-stripe-checkout";

import "./style.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state?.isCheckout) navigate("/", { replace: true });
  const [typeOfPayment, setTypeOfPayment] = useState("cash");
  const [radioChecked, setRadioChecked] = useState(true);

  const { setPopup } = useContext(MsgPopupContext);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setRadioChecked(!radioChecked);
  }, [typeOfPayment]);

  const handelOnChange = (e) => {
    setTypeOfPayment(e.target.value);
  };

  const getDate = () => {
    const date = Date.now();
    const dateForm = new Date(date);
    return dateForm;
  };

  const totalPricesOfMeals = user?.cart?.map(
    (item) => item.quantity * item.mealId.price
  );

  const getSum = (total, num) => total + num;

  const totalPriceOfCart = totalPricesOfMeals?.reduce(getSum, 0);

  const card = {
    name: user?.userName,
    price: totalPriceOfCart,
  };

  const setOrderToPrepare = () => {
    (async () => {
      const url = `${process.env.BASE_SERVER_URL}/api/orders/to-prepare/${user?.cart[0]?.mealId?.chefId}`;

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          deliveryAddress: state.newAddress || user.address,
          createdAt: getDate(),
          deliveryType: state.deliveryType,
          totalPrice: totalPriceOfCart,
          status: "toPrepare",
          customerName: user.userName,
          phone: user.phone,
          email: user.email,
          items: user.cart.map(({ mealId, quantity }) => {
            return {
              title: mealId.title,
              quantity: quantity,
              price: mealId.price,
              image: mealId.image,
            };
          }),
        }),
      });
    })();
  };

  const updateQuantity = () => {
    user?.cart?.forEach(async (item) => {
      const quantity = item.mealId.quantity - item.quantity;
      await fetch(
        `${process.env.BASE_SERVER_URL}/api/meals/update/${item.mealId._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity }),
        }
      );
    });
  };

  const cleanShoppingCart = () => {
    (async () => {
      const response = await fetch(`${process.env.BASE_SERVER_URL}/api/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ cart: [] }),
      });
      const data = await response.json();
      setUser(data.result);
    })();
  };

  const completeOrder = () => {
    updateQuantity();
    setOrderToPrepare();
    cleanShoppingCart();
    navigate("/my-orders", { replace: true });
  };

  const url = `${process.env.BASE_SERVER_URL}/api/payment`;

  const makePayment = (token) => {
    (async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            token: token,
            card: card,
          }),
        });
        const { status } = response;
        if (status === 200) {
          // todo: send order to history
          const data = await response.json();
          setUser(data.result);
          completeOrder();
        } else {
          setPopup({
            type: "error",
            text: "Unable to pay, check your bank account ",
            open: true,
          });
        }
      } catch (error) {
        setPopup({ type: "error", text: error.message, open: true });
      }
    })();
  };

  return (
    <main className="payment-page center-children">
      <div className="complete-payment-container">
        <h4>Choose the payment method</h4>
        <div className="payment-type-container">
          <label className={!radioChecked ? "focus" : "notFocus"}>
            <input
              type="radio"
              name="cash-payment"
              value="cash"
              onChange={(e) => handelOnChange(e)}
              checked={!radioChecked}
            />
            Cash
            <img src={euro} alt="euro" className="euro" />
          </label>
          <label className={radioChecked ? "focus" : "notFocus"}>
            <input
              type="radio"
              name="online-payment"
              value="online"
              onChange={(e) => handelOnChange(e)}
              checked={radioChecked}
            />
            Online
            <img
              src={paymentCard}
              alt="paymentCard"
              className="payment-card-online"
            />
          </label>
        </div>
        {typeOfPayment === "cash" ? (
          <button
            className="link-my-orders-payment-page"
            onClick={completeOrder}
          >
            complete order
          </button>
        ) : (
          <StripeCheckout
            stripeKey={process.env.STRIPE_PUBLIC_KEY}
            token={(token) => makePayment(token)}
            name={`The total amount ${totalPriceOfCart} Є`}
            price={totalPriceOfCart}
          >
            <button className="link-my-orders-payment-page">
              complete order
            </button>
          </StripeCheckout>
        )}
        <div className="payment-methods-icons-container">
          <img
            src={mastercard}
            alt="mastercard"
            className="payment-methods-icons"
          />

          <img src={visa} alt="visa" className="payment-methods-icons" />
          <img
            src={ideal}
            alt="ideal"
            className="payment-methods-icons ideal-icons"
          />
          <img
            src={cash}
            alt="cash"
            className="payment-methods-icons cash-icon"
          />
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
