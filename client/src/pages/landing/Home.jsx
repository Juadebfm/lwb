import React from "react";
import Hero from "./components/Hero";
import Instructor from "./components/Instructor";
import Educate from "./components/Educate";
import InstructorExplained from "./components/InstructorExplained";

const Home = () => {
  return (
    <div>
      <div className="h-[5rem] md:h-[10rem]"></div>
      <Hero
        title="Unlock Your Potential: Learn from Experts Anytime, Anywhere!"
        titleStyle="w-[90%] leading-[100px]"
        description="Connecting you with the finest online courses tailored to your needs. Learn from industry experts. Discover the best courses and elevate your skills today!"
        buttonText="Get Started"
        imageSrc="/herob.jpg"
        imageAlt="Web Development"
        imagePosition="alongside"
        withBackground={false}
        descriptionWidth="70%"
        onButtonClick={() => (window.location.href = "/coming-soon")}
        imageClassName="h-full w-full"
        contentWidth="50%"
      />

      <Educate />
      <InstructorExplained />
      <Instructor />
    </div>
  );
};

export default Home;
