import React from "react";
// import ChefsSlider from "../../components/ChefsSlider";
import ChefsSlider from "../../components/chefsSlider/ChefsSlider";
import TEST_ID from "./Home.testid";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <p>Good luck with the project!</p>
      <ChefsSlider />
    </div>
  );
};

export default Home;
