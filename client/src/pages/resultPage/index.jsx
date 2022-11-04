import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryCard from "../../components/Search/CategoryCard";
import useFetch from "../../hooks/useFetch";
export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const query = searchParams.get("search");
  const category = searchParams.get("category");
  const { performFetch: performSearchFetch } = useFetch(
    `/meals/search?query=${query}`,
    setData
  );
  const { performFetch: performFilterFetch } = useFetch(
    `/meals/filter?category=${category}`,
    setData
  );
  useEffect(() => {
    if (query) {
      performSearchFetch();
    }
    if (category) {
      performFilterFetch();
    }
  }, []);

  return (
    <>
      {data?.result?.map((meal) => (
        <CategoryCard key={meal._id} image={meal.image} title={meal.title} />
      ))}
    </>
  );
}
