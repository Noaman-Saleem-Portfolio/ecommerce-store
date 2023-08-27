import React from "react";
// import Hero from "../../components/Hero/Hero";
import HeroBootstrap from "../../components/Hero/HeroBootstrap";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <HeroBootstrap introText="Store" />
      <Services />
    </>
  );
};

export default Home;
