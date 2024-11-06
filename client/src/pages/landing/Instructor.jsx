import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";

const Instructor = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-[#F5F7FA] h-[150px] flex flex-col items-center justify-center">
          <h2 className="text-center font-semibold capitalize text-[24px]">
            Become an Instructor
          </h2>

          <div className="text-sm">
            <Link
              to="/"
              className="text-[#6E7485] hover:underline underline-offset-4 hover:text-lwb_black duration-150 transition-all ease-linear"
            >
              Home
            </Link>
            <span className="mx-1">/</span>
            <span className="text-lwb_black">Instructor</span>
          </div>
        </div>
        <div className="min-h-[60vh] bg-white">
          <Hero
            title="Become an Instuctor"
            description="Become an instructor & start teaching with other certified instructors. Create a success story with our Students — Become A Positive Influence."
            buttonText="Get Started"
            imageSrc="/inst.jpg"
            imageAlt="Web Development"
            imagePosition="alongside"
            withBackground={false}
            descriptionWidth="70%"
            onButtonClick={() => (window.location.href = "/apply")}
            imageClassName="h-full"
            contentWidth="80%"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Instructor;
