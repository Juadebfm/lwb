import React from "react";

const BecomeInstructor = () => {
  return (
    <main className="bg-[#F5F7FA] ">
      <h2 className="pt-20 text-center text-[30px] capitalize font-semibold w-full lg:w-[35%] mx-auto leading-tight mb-16 lg:mb-0">
        How you'll become successful instructor
      </h2>

      <div className="min-h-[50vh] grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-10 px-8 md:px-28 pb-20 lg:pb-8">
        <div className="bg-white h-max lg:h-[254px] w-full lg:w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#564FFD1A] p-3">
            <img src="/instructorA.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <h3 className="text-lwb_black text-[18px] mt-3">
            1. Apply to become instructor.
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto mt-3">
            Begin your journey by submitting a quick application. Share your
            expertise, set your goals, and get ready to inspire learners
            worldwide.
          </p>
        </div>
        <div className="bg-white h-max lg:h-[254px] w-full lg:w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#FFF0F0] p-3">
            <img
              src="/setupInstructor.png"
              alt=""
              className=" w-[30px] h-[30px]"
            />
          </div>
          <h3 className="text-lwb_black text-[18px] mt-3">
            2. Setup & edit your profile.
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto mt-3">
            Create an engaging instructor profile. Highlight your skills,
            experiences, and teaching style to attract the right audience.
          </p>
        </div>
        <div className="bg-white h-max lg:h-[254px] w-full lg:w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#FFEEE8] p-3">
            <img src="/PlayCircle.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <h3 className="text-lwb_black text-[18px] mt-3">
            3. Create your new course
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto mt-3">
            Design a course that reflects your passion and expertise. Add
            lessons, resources, and interactive elements to make learning
            engaging.
          </p>
        </div>
        <div className="bg-white h-max lg:h-[254px] w-full lg:w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#E1F7E3] p-3">
            <img src="/Handshake.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <h3 className="text-lwb_black text-[18px] mt-3">
            4. Start teaching & earning
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto mt-3">
            Launch your course, connect with learners, and track your impact. As
            you inspire others, you’ll grow your following—and your earnings.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BecomeInstructor;
