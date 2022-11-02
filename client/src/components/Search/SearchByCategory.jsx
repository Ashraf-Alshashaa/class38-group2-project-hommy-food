import React from "react";
import CategoryCard from "./CategoryCard";
import chickenImage from "./chickenImage.jpg";

const SearchByCategory = () => {
  let Categories = [
    {
      title: "chicken1",
      image: chickenImage,
    },
    {
      title: "chicken2",
      image: chickenImage,
    },
    {
      title: "chicken3",
      image: chickenImage,
    },
    {
      title: "chicken4",
      image: chickenImage,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {Categories.map((category) => (
          <CategoryCard
            key={category.title}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};
export default SearchByCategory;
