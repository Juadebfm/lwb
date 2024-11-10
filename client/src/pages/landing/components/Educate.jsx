import React from "react";
import Button from "./Button";

const Educate = () => {
  return (
    <section className="flex items-center justify-center px-8 py-20 lg:py-28 md:px-20 text-center">
      <div className="w-full md:w-[55%] h-full">
        <span className="uppercase tracking-widest text-lwb_orange font-semibold">
          Our mission sounds bold, We Mean It.
        </span>
        <h2 className="text-[40px] font-semibold leading-[48px] mt-6 w-full md:w-[70%] mb-10 mx-auto">
          Our mission is to make learning fun again !
        </h2>
        <p className="text-[#4E5566]/80 w-full md:w-[85%] mx-auto">
          "We cannot solve our problems with the same thinking we used when we
          created them." — Albert Einstein. <br /> Traditional learning can be
          slow to adapt, but knowledge thrives where curiosity and agility meet.
          Embrace flexibility, choose growth, and explore freely. Wipe the slate
          clean and unlock a world of possibilities — because bold thinking
          begins with open access to every skill.
        </p>
      </div>
    </section>
  );
};

export default Educate;
