import React from "react";

import TEST_ID from "./Home.testid";
import SearchField from "../../components/Search/SearchField";
import CuisineListButtons from "../../components/Search/CuisineListButtons";
import CategoryListCards from "../../components/Search/CategoryListCards";
import "./home.css";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <p>Good luck with the project!</p>
      <div className="searchDivision">
        <SearchField />
        <CuisineListButtons />
        <CategoryListCards />
      </div>
    </div>
  );
};

export default Home;
