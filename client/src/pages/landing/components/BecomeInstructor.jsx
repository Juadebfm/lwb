import React from "react";

const BecomeInstructor = () => {
  return (
    <main className="bg-[#F5F7FA] ">
      <h2 className="pt-20 text-center text-[30px] capitalize font-semibold w-[35%] mx-auto leading-tight">
        How you'll become successful instructor
      </h2>

      <div className="min-h-[50vh] grid grid-cols-4 items-center justify-center gap-10 px-28">
        <div className="bg-white h-[254px] w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#564FFD1A] p-3">
            <img src="/instructorA.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <h3 className="text-lwb_black text-[18px]">
            1. Apply to become instructor.
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto">
            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
            consequat eu.
          </p>
        </div>
        <div className="bg-white h-[254px] w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#FFF0F0] p-3">
            <img
              src="/setupInstructor.png"
              alt=""
              className=" w-[30px] h-[30px]"
            />
          </div>
          <h3 className="text-lwb_black text-[18px]">
            2. Setup & edit your profile.
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto">
            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
            consequat eu.
          </p>
        </div>
        <div className="bg-white h-[254px] w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#FFEEE8] p-3">
            <img src="/PlayCircle.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <h3 className="text-lwb_black text-[18px]">
            3. Create your new course
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto">
            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
            consequat eu.
          </p>
        </div>
        <div className="bg-white h-[254px] w-auto flex items-center justify-between p-8 flex-col shadow shadow-lwb_black/10 rounded-md">
          <div className="bg-[#E1F7E3] p-3">
            <img src="/Handshake.png" alt="" className=" w-[30px] h-[30px]" />
          </div>
          <h3 className="text-lwb_black text-[18px]">
            4. Start teaching & earning
          </h3>
          <p className="text-sm text-center text-[#6E7485] w-[80%] mx-auto">
            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
            consequat eu.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BecomeInstructor;
