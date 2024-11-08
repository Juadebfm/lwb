import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Educate from "./components/Educate";
import InstructorExplained from "./components/InstructorExplained";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Unlock Your Potential: Learn from Experts Anytime, Anywhere!"
        titleStyle="w-[90%]"
        description="Connecting you with the finest online courses tailored to your needs. Learn from industry experts. Discover the best courses and elevate your skills today!"
        buttonText="Get Started"
        imageSrc="/herob.jpg"
        imageAlt="Web Development"
        imagePosition="alongside"
        withBackground={false}
        descriptionWidth="90%"
        onButtonClick={() => (window.location.href = "/coming-soon")}
        imageClassName="h-full w-full"
        contentWidth="100%"
      />
      <Educate />
      <InstructorExplained />
      <Instructor />
      <Footer />
    </div>
  );
};

export default Home;
