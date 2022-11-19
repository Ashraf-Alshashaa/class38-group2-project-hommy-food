import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PulseLoader from "react-spinners/PulseLoader";
import somethingWentWrong from "../resultPage/something-went-wrong.png";
// import DeliveryIcon from "../../components/mealCard/greenScooterDelivery.png";
// import ChefAvatar from "../../components/mealCard/yellowchef.png";
import "./style.css";
const mealDetailPage = () => {
  let mealId = useParams();

  const [data, setData] = useState([]);
  const { performFetch, isLoading, error } = useFetch(
    `/meals/meal_detail/${mealId.id}`,
    setData
  );
  useEffect(() => {
    performFetch();
  }, []);
  if (isLoading) {
    return (
      <div className="meal-detail-page-container">
        <div className="loading-gif">
          <PulseLoader
            color="#f9a01b"
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="meal-detail-page-container">
        <div className="error">
          <img src={somethingWentWrong} alt="something went wrong" />
          <h1>Oops!</h1>
          <h5>Something went wrong try again or refresh page</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="meal-detail-page-container">
      <div className="meal-Detail-page">
        <section className="divide">
          <div className="meal-page-image">
            <img src={data?.result?.image} alt={data?.result?.title} />
          </div>
        </section>
        <section className="divide2">
          <div className="meal-page-title">
            <h5>{data?.result?.title}</h5>
            <Link
              to={`/profile/${data?.result?.chefId?._id}`}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1vw",
              }}
            >
              {" "}
              <div className="meal-detail-page-chip">
                {data?.result?.chefId?.photo ? (
                  <img
                    src={data?.result?.chefId?.photo}
                    alt="Person"
                    width="96"
                    height="96"
                  />
                ) : (
                  <img src={null} alt="Person" width="96" height="96" />
                )}
                {data?.result?.chefId?.userName}
              </div>
            </Link>
          </div>
          <div className="meal-page-info">
            <div>
              Quantity<p> {data?.result?.quantity}</p>
            </div>
            <div>
              Cuisine <p> {data?.result?.cuisine.title}</p>
            </div>
            <div>
              Category <p> {data?.result?.category.title}</p>{" "}
            </div>
          </div>
          <div className="meal-page-Ingredients">
            <p>
              <strong>Ingredients: </strong>
              {data?.result?.ingredients}{" "}
            </p>
          </div>
          <div className="meal-page-description">
            <p>
              <strong>Description: </strong>
              {data?.result?.description}
            </p>
          </div>
          <div className="meal-page-price">
            <div className="meal-detail-page-chip">
              {/* <img src={DeliveryIcon} alt="Person" width="96" height="96" /> */}
              pickup{data?.result?.delivery}
            </div>
            <p>
              <strong>€: </strong>
              {data?.result?.price}
            </p>
            <Link to="/shoppingCart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default mealDetailPage;
