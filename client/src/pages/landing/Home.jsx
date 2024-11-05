import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Instructor from "./components/Instructor";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Instructor />
    </div>
  );
};

export default Home;
