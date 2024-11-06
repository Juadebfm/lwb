import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { formatDate } from "../../../utils";

const Footer = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  return (
    <footer className="min-h-[65vh] bg-lwb_black text-white ">
      <div className="border-b border-[#363B4780] flex items-center justify-center">
        <div className="px-8 py-20 lg:py-28 md:px-20 lg:px-28 w-[48%]">
          <h2 className="capitalize text-[40px] leading-[52px] w-[95%]">
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
            <span className="text-[40px] font-semibold">
              <CountUp start={0} end={6.3} duration={2.75} />K
            </span>
            <span className="text-[#B7BAC7]">Online Courses</span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-[40px] font-semibold">
              <CountUp start={0} end={26} duration={2.75} />K
            </span>
            <span className="text-[#B7BAC7]">Certified Instructor</span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-[40px] font-semibold">
              <CountUp start={0} end={99} duration={2.75} />%
            </span>
            <span className="text-[#B7BAC7]">Success Rate</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 py-8 lg:py-14 px-8 md:px-20 lg:px-28 gap-20 items-start justify-center">
        {/* Brand */}
        <div>
          <img src="/learning.png" alt="" className="h-[48px]" />
          <p className="mt-6 text-sm text-[#8C94A3] leading-[22px]">
            Connecting you with the finest online courses tailored to your
            needs. Learn from industry experts. Discover the best courses and
            elevate your skills today!
          </p>
          <div className="flex items-center justify-start gap-2 mt-6">
            <CiFacebook className="h-[49px] w-[49px] bg-[#363B4766] p-2 cursor-pointer hover:bg-lwb_orange hover:text-white duration-150 ease-linear rounded" />
            <CiTwitter className="h-[49px] w-[49px] bg-[#363B4766] p-2 cursor-pointer hover:bg-lwb_orange hover:text-white duration-150 ease-linear rounded" />
            <CiInstagram className="h-[49px] w-[49px] bg-[#363B4766] p-2 cursor-pointer hover:bg-lwb_orange hover:text-white duration-150 ease-linear rounded" />
          </div>
        </div>

        {/* Quick Links */}
        <ul className="space-y-5 pl-14 text-[#8C94A3]">
          <span className="text-white uppercase font-sans tracking-widest">
            Quick Links
          </span>
          <li className="text-sm">
            <Link
              to="/"
              className={`${
                isActiveLink("/")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Home
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="/instructor"
              className={`${
                isActiveLink("/instructor")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Become An Instructor
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="/contact"
              className={`${
                isActiveLink("/contact")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Contact
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="/courses"
              className={`${
                isActiveLink("courses")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Courses
            </Link>
          </li>
        </ul>
        {/* Support */}
        <ul className="space-y-5 pl-14 text-[#8C94A3]">
          <span className="text-white uppercase font-sans tracking-widest">
            support
          </span>
          <li className="text-sm">
            <Link
              to="/help-center"
              className={`${
                isActiveLink("/help-center")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Help Center
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="/faqs"
              className={`${
                isActiveLink("/faqs")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Faqs
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="/terms-conditions"
              className={`${
                isActiveLink("/terms-conditions")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Terms & Conditions
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="/privacy-policy"
              className={`${
                isActiveLink("/privacy-policy")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-[#8C94A3] hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
