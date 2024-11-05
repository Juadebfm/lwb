import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="min-h-[65vh] bg-lwb_black text-white">
      <div className="border-b border-[#363B4780] flex items-center justify-center">
        <div className="px-8 py-20 lg:py-28 md:px-20 lg:px-28 w-[48%]">
          <h2 className="capitalize font-semibold text-[40px] leading-[48px]">
            Start learning with students around the world.
          </h2>
          <div className="mt-8 flex items-center justify-start gap-8">
            <Button className="bg-lwb_orange hover:bg-lwb_orange/50 text-white hover:text-white flex items-center justify-between h-[48px] group  w-full lg:w-auto px-4 gap-4">
              <span>Join The Family</span>
              <ArrowRight className="group-hover:animate-pulse" />
            </Button>
            <Button className="bg-[#FFFFFF0D] hover:bg-white text-white hover:text-lwb_black flex items-center justify-between h-[48px] group  w-full lg:w-auto px-4 gap-4">
              <span>Browse All Courses</span>
              <ArrowRight className="group-hover:animate-pulse" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center justify-center w-[52%]">
          <div className="flex flex-col items-start justify-start">
            <span className="text-[40px] font-semibold">--</span>{" "}
            <span className="text-[#B7BAC7]">Online Courses</span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-[40px] font-semibold">--</span>{" "}
            <span className="text-[#B7BAC7]">Certified Instructor</span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-[40px] font-semibold">99%</span>{" "}
            <span className="text-[#B7BAC7]">Success Rate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
