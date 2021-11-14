import React from "react";
import Banner from "../Banner/Banner";
import BestSeller from "../BesSeller/BestSeller";
import HomeProducts from "../HomeProducts/HomeProducts";
import ReviewHome from "../ReviewHome/ReviewHome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestSeller></BestSeller>
      <HomeProducts></HomeProducts>
      <ReviewHome></ReviewHome>
    </div>
  );
};

export default Home;
