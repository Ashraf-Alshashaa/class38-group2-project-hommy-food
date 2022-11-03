import React from "react";

import TEST_ID from "./Home.testid";
import SearchField from "../../components/Search/SearchField";
import CuisineListButtons from "../../components/Search/CuisineListButtons";
import CategoryListCards from "../../components/Search/CategoryListCards";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <p>Good luck with the project!</p>
      <SearchField />
      <CuisineListButtons />
      <CategoryListCards />
    </div>
  );
};

export default Home;
