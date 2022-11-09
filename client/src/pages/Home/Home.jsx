import React from "react";
import ChefsSlider from "../../components/chefsSlider/ChefsSlider";
import Banner from "../../components/Banner";
import TEST_ID from "./Home.testid";
import SearchField from "../../components/SearchField";
import CuisineListButtons from "../../components/CuisineListButtons/index";
import CategoryListCards from "../../components/CategoryListCards/index";
import PersonalInfo from "../../components/PersonalInfo";
import RateStar from "../../components/RateStar";
import "./style.css";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <div className="home-main-container">
        <PersonalInfo />
        <RateStar />
        <Banner />
        <div className="home-search-container">
          <SearchField />
          <CuisineListButtons />
          <CategoryListCards />
          <ChefsSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
