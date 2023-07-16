import React from "react";
import Hero from "./Hero";
import About from "./About";
import Doctors from "./Doctors";
import AppointmentBanner from "./AppionmentBanner";
import ExServices from "./ExServices";
import CTA from "./CTA";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Doctors></Doctors>
      <AppointmentBanner></AppointmentBanner>
      <ExServices></ExServices>
      <CTA></CTA>
    </div>
  );
};

export default Home;
