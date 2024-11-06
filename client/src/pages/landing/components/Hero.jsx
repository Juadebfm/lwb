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
  descriptionWidth = "80%",
  imageClassName = "",
  contentWidth = "50%", // New prop to control content width

  // Event handlers
  onButtonClick = (e) => {
    e.preventDefault();
    console.log("Clicked");
  },

  // Optional custom components
  CustomButton,
  CustomIcon = ArrowRight,
}) => {
  const contentSection = (
    <div
      className={`px-8 py-20 lg:py-28 md:px-20 lg:px-28 space-y-6 w-[${contentWidth}]`}
    >
      <h1 className="text-[35px] md:text-[49px] leading-tight font-semibold">
        {title}
      </h1>
      <p
        className="text-[#4E5566] text-[18px] leading-relaxed"
        style={{ width: descriptionWidth }}
      >
        {description}
      </p>
      {CustomButton ? (
        CustomButton
      ) : (
        <Button
          className="bg-lwb_orange px-4 hover:bg-lwb_black text-white hover:text-white flex items-center justify-between h-[48px] group w-full lg:w-[196px]"
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
      className={`h-full w-[${
        100 - parseInt(contentWidth)
      }%] ${imageClassName}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-auto h-auto object-cover"
      />
    </div>
  );

  let heroContent;
  if (imagePosition === "left") {
    heroContent = (
      <div className="flex items-center justify-center w-full">
        {imageSection}
        {contentSection}
      </div>
    );
  } else if (imagePosition === "right") {
    heroContent = (
      <div className="flex items-center justify-center w-full">
        {contentSection}
        {imageSection}
      </div>
    );
  } else {
    heroContent = (
      <div className="flex items-center justify-center w-full">
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
