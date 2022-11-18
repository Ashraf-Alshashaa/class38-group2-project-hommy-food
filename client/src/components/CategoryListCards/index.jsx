import React from "react";
import CategoryCard from "./CategoryCard";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CategoryListCards = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { performFetch } = useFetch("/categories", setCategories);
  useEffect(() => {
    performFetch();
  }, []);
  const handleClick = (id) => {
    navigate(`/results?category=${id}`);
  };
  return (
    <div className="categories-Container">
      <div className="container">
        <div className="row">
          {categories?.result?.map((category) => (
            <CategoryCard
              key={category._id}
              image={category.image}
              title={category.title}
              onClick={() => {
                handleClick(category?._id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryListCards;
