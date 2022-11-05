import React from "react";

import TEST_ID from "./Home.testid";
import SearchField from "../../components/SearchField";
import CuisineListButtons from "../../components/CuisineListButtons/index";
import CategoryListCards from "../../components/CategoryListCards/index";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <Banner />
      <SearchField />
      <CuisineListButtons />
      <CategoryListCards />
    </div>
  );
};

export default Home;
