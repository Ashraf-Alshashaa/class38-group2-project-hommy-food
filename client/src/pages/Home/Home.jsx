import React from "react";

import TEST_ID from "./Home.testid";
import SearchField from "../../components/Search/SearchField";
import SearchByCuisine from "../../components/Search/SearchByCuisine";
import SearchByCategory from "../../components/Search/SearchByCategory";
import "./home.css";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <p>Good luck with the project!</p>
      <div className="searchDivision">
        <SearchField />
        <SearchByCuisine />
        <SearchByCategory />
      </div>
    </div>
  );
};

export default Home;
