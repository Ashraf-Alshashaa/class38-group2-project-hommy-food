import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryCard from "../../components/CategoryListCards/CategoryCard";
import useFetch from "../../hooks/useFetch";
import "./style.css";
export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = searchParams.get("search");
  const category = searchParams.get("category");
  const cuisine = searchParams.get("cuisine");
  const {
    performFetch: performSearchFetch,
    isLoading,
    error,
  } = useFetch(`/meals/search?query=${query}`, setData);
  const { performFetch: performFilterCategoryFetch } = useFetch(
    `/meals/filter?category=${category}`,
    setData
  );
  const { performFetch: performFilterCuisineFetch } = useFetch(
    `/meals/filter?cuisine=${cuisine}`,
    setData
  );

  useEffect(() => {
    query && performSearchFetch();
    category && performFilterCategoryFetch();
    cuisine && performFilterCuisineFetch();
  }, []);

  return isLoading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : error ? (
    <>
      <h2>{error}</h2>
    </>
  ) : (
    <>
      <div className="result-page">
        {data?.result?.map((meal) => (
          <CategoryCard key={meal._id} image={meal.image} title={meal.title} />
        ))}
      </div>
    </>
  );
}
