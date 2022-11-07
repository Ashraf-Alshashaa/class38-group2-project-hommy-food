import React from "react";

import TEST_ID from "./Home.testid";
import SearchField from "../../components/SearchField";
import CuisineListButtons from "../../components/CuisineListButtons/index";
import CategoryListCards from "../../components/CategoryListCards/index";
import Banner from "../../components/Banner";
import "./style.css";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <div className="home-main-container">
        <Banner />
        <div className="home-search-container">
          <SearchField />
          <CuisineListButtons />
          <CategoryListCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
