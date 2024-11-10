import React from "react";
import ThreeDCard from "./ThreeD";

const InstructorExplained = () => {
  return (
    <section className="px-8 py-20 lg:py-28 md:px-20">
      <div className="flex flex-col items-center justify-center">
        <span className="uppercase tracking-widest text-lwb_orange font-semibold mb-8 text-center">
          Empower Others, Share Your Expertise
        </span>
        <h1 className="text-[40px] font-semibold leading-[48px] w-full lg:w-[50%] text-center mx-auto mb-8 capitalize">
          Why You Should Join Us as an Instructor{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        <ThreeDCard
          topic="Teach Your Way"
          para="Share your expertise in your own unique style. Create courses that reflect your voice, connect with your students, and deliver lessons that make an impact."
          btn="Learn More"
        />
        <ThreeDCard
          topic="Manage Everything in One Place"
          para="Easily manage your courses, content, and payments in one streamlined platform. Stay organized, update effortlessly, and focus on what you do best—teaching."
          btn="Learn More"
        />
        <ThreeDCard
          topic="Connect with Your Students"
          para="Build meaningful connections with learners through interactive sessions. Engage directly, answer questions, and inspire your students every step of the way."
          btn="Learn More"
        />
      </div>
    </section>
  );
};

export default InstructorExplained;
