import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-lwb_hero_gradient min-h-[70vh] grid grid-cols-1 lg:grid-cols-[60%_40%] items-center justify-center text-lwb_black">
      <div className="px-8 py-20 lg:py-28 md:px-20 lg:px-28 space-y-6">
        <h1 className="text-[35px] md:text-[49px] leading-tight font-semibold">
          Unlock Your Potential: Learn from Experts Anytime, Anywhere!
        </h1>
        <p className="text-[#4E5566] text-[18px] leading-relaxed w-[80%]">
          Connecting you with the finest online courses tailored to your needs.
          Learn from industry experts. Discover the best courses and elevate
          your skills today!
        </p>
        <Button
          className="bg-lwb_orange px-4 hover:bg-lwb_black text-white hover:text-white flex items-center justify-between h-[48px] group  w-full lg:w-[196px]"
          onClick={(e) => {
            e.preventDefault();
            console.log("Clicked");
          }}
        >
          <span>Get Started</span>{" "}
          <ArrowRight className="group-hover:animate-pulse" />
        </Button>
      </div>
      <div className="relative">
        <img
          src="/heromain.jpg"
          alt="Instructor"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
