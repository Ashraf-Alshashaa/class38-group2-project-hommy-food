import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";
import deliveryImg from "../../../public/images/delivery.png";
import pickupImg from "../../../public/images/pickup1.jpg";
import InputForm from "../../components/InputForm";

const CheckoutPage = () => {
  const { user } = useContext(AuthContext);
  const [newAddress, setNewAddress] = useState();
  const [sendNewAddress, setSendNewAddress] = useState(false);

  /* const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewAddress({ ...newAddress, [name]: value });
  }; */
  const deliverType = "pickup";

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {deliverType === "pickup" ? (
        <div className="checkout-pickup-option">
          <h3>
            {" "}
            Your order is already ready for you to pickup in the address below.{" "}
          </h3>
          <div className="pickup-image">
            <img src={pickupImg} alt="pickup" />
          </div>
          <h2>Chef Address</h2>
        </div>
      ) : (
        <div className="checkout-delivery-option ">
          <div className="customer-info-card">
            <div className="delivery-img">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src={deliveryImg} alt="delivery" />
                </div>
              </div>
            </div>
            <div className="customer-existing-info-container">
              <div className="contact-info-container">
                <h3>Contact</h3>
                <p>
                  <label>Name:</label>{" "}
                  {`${user?.fullName.first} ${user?.fullName.last}`}
                </p>
                <p>
                  <label>Phone Number:</label> {`${user?.phone}`}
                </p>
                <p>
                  <label>Email:</label> {`${user?.email}`}
                </p>
              </div>
              <div className="address-container">
                <h3>Address</h3>
                {user?.address ? (
                  <p>{`${user?.address}`}</p>
                ) : (
                  <p>
                    Your address is still missing in your profile. Please fill
                    the address form.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="new-address-form">
            <h4>
              {user?.address ? (
                <div className="new-address-check-box-container">
                  <>
                    <input
                      className="toggle"
                      type="checkbox"
                      id="sendNewAddress"
                      name="sendNewAddress"
                      value={sendNewAddress}
                      onChange={() => setSendNewAddress(!sendNewAddress)}
                    />
                    <label
                      className="toggle-label"
                      htmlFor="sendNewAddress"
                    ></label>
                  </>
                  <p>I want my order to this address.</p>
                </div>
              ) : (
                "You need to fill delivery address"
              )}
            </h4>
            <InputForm
              className="address-input"
              label="Address*"
              type="text"
              placeholder="Delivery Address"
              name="street"
              errorMessage="Address is required field!"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              required
              disabled={!sendNewAddress}
            />
            {/*  <InputForm
              className="address-input"
              label="City*"
              type="text"
              placeholder="City Name"
              name="city"
              value={newAddress["city"]}
              errorMessage="City is required field!"
              onChange={handleChange}
              required
            /> */}
          </div>
        </div>
      )}
      <button className="continue-btn">
        To Payment<i className="fa-solid fa-arrow-right payment-arrow-icon"></i>
      </button>
    </div>
  );
};

export default CheckoutPage;
