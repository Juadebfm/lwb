import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Instructor />
      <Footer />
    </div>
  );
};

export default Home;
