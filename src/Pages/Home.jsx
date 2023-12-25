import React from "react";
import Header from "../components/Header/Header";
import Feaures from "../components/Feature/Features";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Feaures />
      <Banner />
    </React.Fragment>
  );
};

export default Home;
