import React from "react";
import Hero from "./Hero";
import About from "./About";
import Doctors from "./Doctors";
import AppointmentBanner from "./AppionmentBanner";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Doctors></Doctors>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
