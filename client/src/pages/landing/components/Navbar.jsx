import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { formatDate } from "../../../utils";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header>
      <div className="bg-lwb_black h-max text-gray-100 px-8 md:px-20 lg:px-28 hidden lg:flex items-center justify-between">
        <ul className="flex items-center justify-between gap-6 py-5 text-sm">
          <li>
            <Link
              to="/"
              className={`${
                isActiveLink("/")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`${
                isActiveLink("/courses")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Course
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                isActiveLink("/about")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                isActiveLink("/contact")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/instructor"
              className={`${
                isActiveLink("/instructor")
                  ? "text-white border-b-2 border-lwb_orange"
                  : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
              } pb-1 transition-all duration-300`}
            >
              Become An Instructor
            </Link>
          </li>
        </ul>
        <div className="text-sm text-slate-400">{formattedDate}</div>
      </div>
      <nav className="bg-white px-8 md:px-20 lg:px-28 py-4 md:py-8 lg:py-4 flex items-center justify-between border-y border-y-[#E9EAF0]">
        <Link to="/">
          <img
            src="/smalllogo.png"
            alt="Learning without borders"
            className="flex lg:hidden h-[48px] w-auto"
          />
          <img
            src="/learning.png"
            alt="Learning without borders"
            className="h-[48px] w-auto hidden lg:flex"
          />
        </Link>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex border-none lg:border border-[#E9EAF0] h-[48px] w-auto lg:w-[424px] items-center justify-start pl-0 lg:pl-4 relative">
            <CiSearch className="text-[24px] text-slate-400 absolute left-8" />
            <input
              type="search"
              placeholder="What do you want to learn"
              className="placeholder:pl-12 placeholder:text-sm placeholder:text-slate-400 w-full h-full border border-slate-300 active:border-none ring-0 focus:border-none"
            />
          </div>
          <div className="hidden lg:flex space-x-6">
            <Button className="bg-[#FFEEE8] w-[168px] h-[48px] text-lwb_orange">
              Create Account
            </Button>
            <Button
              className="bg-lwb_orange w-[168px] h-[48px] text-white text-shadow-lg shadow-black"
              text="Sign In"
            >
              Sign In
            </Button>
          </div>
          <button
            className="lg:hidden bg-lwb_orange text-white p-2 rounded text-[48px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-8 py-4 lg:hidden"
          >
            <ul className="space-y-7 py-10">
              <li>
                <Link
                  to="/"
                  className={`${
                    isActiveLink("/")
                      ? "text-lwb_orange font-semibold"
                      : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
                  } pb-1 transition-all duration-300 w-full`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className={`${
                    isActiveLink("/courses")
                      ? "text-lwb_orange font-semibold"
                      : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
                  } pb-1 transition-all duration-300 w-full`}
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${
                    isActiveLink("/about")
                      ? "text-lwb_orange font-semibold"
                      : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
                  } pb-1 transition-all duration-300 w-full`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    isActiveLink("/contact")
                      ? "text-lwb_orange font-semibold"
                      : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
                  } pb-1 transition-all duration-300 w-full`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/instructor"
                  className={`${
                    isActiveLink("/instructor")
                      ? "text-lwb_orange font-semibold"
                      : "text-slate-400 hover:text-slate-200 duration-150 ease-linear transition-all"
                  } pb-1 transition-all duration-300 w-full`}
                >
                  Become An Instructor
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;