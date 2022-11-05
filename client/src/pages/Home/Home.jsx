import React from "react";
import Banner from "../../components/Banner";
import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <Banner />
      <h1>Search section</h1>
      <h1>High 10 rated chefs</h1>
      <h1>Footer</h1>
    </div>
  );
};

export default Home;
