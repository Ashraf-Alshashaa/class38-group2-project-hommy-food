import React from "react";
import ChefsSlider from "../../components/chefsSlider/ChefsSlider";
import Banner from "../../components/Banner";
import TEST_ID from "./Home.testid";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <Banner />
      <ChefsSlider />
    </div>
  );
};

export default Home;
