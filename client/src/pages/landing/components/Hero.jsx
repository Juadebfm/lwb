import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Hero = ({
  // Content props
  title = "Unlock Your Potential: Learn from Experts Anytime, Anywhere!",
  description = "Connecting you with the finest online courses tailored to your needs. Learn from industry experts. Discover the best courses and elevate your skills today!",
  buttonText = "Get Started",
  imageSrc = "/heromain.jpg",
  imageAlt = "Instructor",

  // Style props
  className = "",
  imagePosition = "right", // 'right', 'left', or 'alongside'
  withBackground = true,
  descriptionWidth = "100%", // Width adjusted for responsiveness
  titleStyle = "",
  imageClassName = "",
  img = "",
  contentWidth = "100%", // Adjusts to screen size

  // Event handlers
  onButtonClick = (e) => {
    e.preventDefault();
    window.location.href = "/coming-soon";
  },

  // Optional custom components
  CustomButton,
  CustomIcon = ArrowRight,
}) => {
  const contentSection = (
    <div
      className={`px-8 py-10 md:py-16 lg:py-28 md:px-12 lg:px-20 space-y-6 h-full w-full ${contentWidth} ${
        imagePosition === "alongside" ? "md:w-[60%]" : "w-full lg:w-[50%]"
      }`}
    >
      <h1
        className={`text-[40px] md:text-5xl font-semibold ${titleStyle}`}
        style={{ lineHeight: 1.3 }}
      >
        {title}
      </h1>
      <p
        className="text-[#4E5566] text-base md:text-lg lg:text-xl leading-relaxed"
        style={{ width: descriptionWidth, lineHeight: 1.7 }}
      >
        {description}
      </p>
      {CustomButton ? (
        CustomButton
      ) : (
        <Button
          className="bg-lwb_orange px-4 hover:bg-lwb_black text-white flex items-center justify-between h-[48px] group w-full md:w-[50%] lg:w-[196px]"
          onClick={onButtonClick}
        >
          <span>{buttonText}</span>
          <CustomIcon className="group-hover:animate-pulse" />
        </Button>
      )}
    </div>
  );

  const imageSection = (
    <div
      className={`h-full w-full ${
        imagePosition === "alongside" ? "md:w-[40%]" : "w-full lg:w-[50%]"
      } ${imageClassName}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`w-full h-full object-cover ${img}`}
      />
    </div>
  );

  let heroContent;
  if (imagePosition === "left") {
    heroContent = (
      <div className="flex flex-col-reverse lg:flex-row items-center w-full">
        {imageSection}
        {contentSection}
      </div>
    );
  } else if (imagePosition === "right") {
    heroContent = (
      <div className="flex flex-col lg:flex-row items-center w-full">
        {contentSection}
        {imageSection}
      </div>
    );
  } else {
    heroContent = (
      <div className="flex flex-col lg:flex-row items-center w-full">
        {contentSection}
        {imageSection}
      </div>
    );
  }

  return (
    <section
      className={`${
        withBackground ? "bg-lwb_hero_gradient" : ""
      } min-h-[70vh] flex items-center justify-center text-lwb_black ${className}`}
    >
      {heroContent}
    </section>
  );
};

export default Hero;
