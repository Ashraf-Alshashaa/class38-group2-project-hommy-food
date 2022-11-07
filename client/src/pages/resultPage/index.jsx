import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CategoryCard from "../../components/CategoryListCards/CategoryCard";
import useFetch from "../../hooks/useFetch";
import "./index.css";
import sadChef from "./sadChef.jpg";
import loader from "./orange_circles.gif";
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
    <>
      <img className="loading-gif" src={loader} alt="loader" />
    </>
  ) : errorSearch || errorCategory || errorCuisine ? (
    <>
      <h5>
        {errorSearch.message || errorCategory.message || errorCuisine.message}
      </h5>
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
