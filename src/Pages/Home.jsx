import React from "react";
import Header from "../components/Header/Header";
import Feaures from "../components/Feature/Features";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Feaures />
    </React.Fragment>
  );
};

export default Home;
