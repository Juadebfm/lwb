import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Instructor = () => {
  return (
    <section className="min-h-max bg-[#F5F7FA] px-8 py-20 lg:py-28 md:px-20 lg:px-28">
      <div className="w-full lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center  gap-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-lwb_orange">
          <div className=" text-white p-10 w-full min-h-[270px] flex flex-col items-start justify-between">
            <h2 className="text-[23px] capitalize font-bold mb-4">
              Become an Instructor
            </h2>
            <p className="mb-4 text-sm">
              Instructors/teachers from around the world teach millions of
              students on our platform. We provide the tools and the platform to
              teach what you love.
            </p>

            <Button className="bg-white px-4 hover:bg-lwb_black text-lwb_orange hover:text-white flex items-center justify-between h-[48px] w-full lg:w-[196px] group">
              <span>Get Started</span>
              <ArrowRight className="group-hover:animate-pulse" />
            </Button>
          </div>
        </div>

        <div className="text-lwb_black bg-white p-10 w-full h-full">
          <h2 className="text-[23px] capitalize font-semibold mb-4">
            Your teaching & earning steps
          </h2>

          <div className="mt-8 grid grid-cols-2 items-center justify-center gap-8">
            <div className="flex items-center justify-start gap-2">
              <div className="bg-[#EBEBFF] text-[18px] text-[#564FFD] font-semibold p-2 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                1
              </div>
              <span className="text-[#1D2026] text-sm">
                Apply to become instructor
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="bg-[#FFF0F0] text-[18px] text-lwb_orange font-semibold p-2 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                2
              </div>
              <span className="text-[#1D2026] text-sm">
                Build And Edit Your Profile
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="bg-[#FFF0F0] text-[18px] text-[#E34444] font-semibold p-2 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                3
              </div>
              <span className="text-[#1D2026] text-sm">Create A Course</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="bg-[#E1F7E3] text-[18px] text-[#23BD33] font-semibold p-2 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                4
              </div>
              <span className="text-[#1D2026] text-sm">
                Start Impacting Positively
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
