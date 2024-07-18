import React from "react";
import Navbar from "../components/Layout/nav";
import Hero from "../components/langing/Hero";
import { Statistic } from "../components/langing/States";
import Cared from "../components/langing/Cared";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistic />
      <Cared />
    </>
  );
};

export default Landing;
