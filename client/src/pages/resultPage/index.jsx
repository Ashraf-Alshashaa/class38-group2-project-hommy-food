import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CategoryCard from "../../components/CategoryListCards/CategoryCard";
import useFetch from "../../hooks/useFetch";
import "./index.css";
import sadChef from "./sadChef.jpg";
// import loader from "./orange_circles.gif";
import somethingWentWrong from "./something-went-wrong.png";
import PulseLoader from "react-spinners/PulseLoader";
export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = searchParams.get("search");
  const category = searchParams.get("category");
  const cuisine = searchParams.get("cuisine");
  const {
    performFetch: performSearchFetch,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useFetch(`/meals/search?query=${query}`, setData);
  const {
    performFetch: performFilterCategoryFetch,
    isLoading: isLoadingCategory,
    error: errorCategory,
  } = useFetch(`/meals/filter?category=${category}`, setData);
  const {
    performFetch: performFilterCuisineFetch,
    isLoading: isLoadingCuisine,
    error: errorCuisine,
  } = useFetch(`/meals/filter?cuisine=${cuisine}`, setData);

  useEffect(() => {
    query && performSearchFetch();
    category && performFilterCategoryFetch();
    cuisine && performFilterCuisineFetch();
  }, []);

  return isLoadingSearch || isLoadingCuisine || isLoadingCategory ? (
    <div className="loading-gif">
      <PulseLoader
        color="#f9a01b"
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : errorSearch || errorCategory || errorCuisine ? (
    <>
      <div className="error">
        <img src={somethingWentWrong} alt="something went wrong" />
        <h1>Oops!</h1>
        <h5>Something went wrong try again or refresh page</h5>
      </div>
    </>
  ) : (
    <>
      <div className="result-page">
        {!data?.result?.length > 0 && (
          <div className="meals-notFound">
            <img src={sadChef} alt="sad chef" />
            <h1>Oops!</h1>
            <h5>
              Sorry no meals found go back to <Link to="/">HomePage</Link>
            </h5>
          </div>
        )}
        {data?.result?.map((meal) => (
          <CategoryCard key={meal._id} image={meal.image} title={meal.title} />
        ))}
      </div>
    </>
  );
}
