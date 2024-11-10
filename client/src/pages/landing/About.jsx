import React from "react";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Educate from "./components/Educate";
import InstructorExplained from "./components/InstructorExplained";
import { ProfileCard } from "./components/ProfileCard";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#F5F7FA] h-[150px] flex flex-col items-center justify-center">
        <h2 className="text-center font-semibold capitalize text-[24px]">
          About
        </h2>

        <div className="text-sm">
          <Link
            to="/"
            className="text-[#6E7485] hover:underline underline-offset-4 hover:text-lwb_black duration-150 transition-all ease-linear"
          >
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-lwb_black">About</span>
        </div>
      </div>
      <div className="h-max">
        <Hero
          title="We share knowledge with the world"
          titleStyle="w-[90%] capitalize"
          description="Connecting you with the finest online courses tailored to your needs. Learn from industry experts. Discover the best courses and elevate your skills today!"
          buttonText="Get Started"
          imageSrc="/mentor.jpg"
          imageAlt="Web Development"
          imagePosition="alongside"
          withBackground={false}
          descriptionWidth="90%"
          onButtonClick={() => (window.location.href = "/coming-soon")}
          imageClassName="h-full w-full"
          img="w-full h-[100%]"
          contentWidth="100%"
        />
      </div>
      <InstructorExplained />
      <Educate />
      <div className="px-8 py-20 lg:py-28 md:px-20">
        <h2 className="text-center font-semibold capitalize text-3xl mb-10">
          Team Members
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-10">
          <ProfileCard
            name="Mr Alex"
            position="CTO"
            profileImage="/team.jpg"
            socialLinks={[
              {
                platform: "Facebook",
                url: "#facebook",
                IconComponent: CiFacebook,
                color: "blue",
              },
              {
                platform: "Twitter",
                url: "#twitter",
                IconComponent: CiTwitter,
                color: "light-blue",
              },
              {
                platform: "Instagram",
                url: "#instagram",
                IconComponent: CiInstagram,
                color: "purple",
              },
            ]}
          />
          <ProfileCard
            name="Mr Alex"
            position="CTO"
            profileImage="/team.jpg"
            socialLinks={[
              {
                platform: "Facebook",
                url: "#facebook",
                IconComponent: CiFacebook,
                color: "blue",
              },
              {
                platform: "Twitter",
                url: "#twitter",
                IconComponent: CiTwitter,
                color: "light-blue",
              },
              {
                platform: "Instagram",
                url: "#instagram",
                IconComponent: CiInstagram,
                color: "purple",
              },
            ]}
          />
          <ProfileCard
            name="Mr Alex"
            position="CTO"
            profileImage="/team.jpg"
            socialLinks={[
              {
                platform: "Facebook",
                url: "#facebook",
                IconComponent: CiFacebook,
                color: "blue",
              },
              {
                platform: "Twitter",
                url: "#twitter",
                IconComponent: CiTwitter,
                color: "light-blue",
              },
              {
                platform: "Instagram",
                url: "#instagram",
                IconComponent: CiInstagram,
                color: "purple",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
