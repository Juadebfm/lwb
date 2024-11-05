```jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import { formatDate } from "../../../utils";

const Navbar = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  const [isTopNavVisible, setIsTopNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsTopNavVisible(window.pageYOffset < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="">
        {/* Top navigation with dark background */}
        <div
          className={`bg-lwb_black h-max text-gray-900 px-8 flex items-center justify-between top-nav ${
            isTopNavVisible ? "block" : "hidden"
          }`}
        >
          <ul className="flex items-center justify-between gap-6 py-7">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-white border-t-4 border-lwb_orange"
                    : "text-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`${
                  location.pathname === "/courses"
                    ? "text-white border-t-4 border-lwb_orange"
                    : "text-gray-900"
                }`}
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "text-white border-t-4 border-lwb_orange"
                    : "text-gray-900"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? "text-white border-t-4 border-lwb_orange"
                    : "text-gray-900"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/instructor"
                className={`${
                  location.pathname === "/instructor"
                    ? "text-white border-t-4 border-lwb_orange"
                    : "text-gray-900"
                }`}
              >
                Become An Instructor
              </Link>
            </li>
          </ul>
          <div>{formattedDate}</div>
        </div>

        {/* Main navigation with logo and search */}
        <div className="bg-white flex items-center justify-between px-8 border-y border-y-[#E9EAF0] py-3 md:block">
          <div className="flex items-center justify-center h-[96px] space-x-9">
            <img
              src="/learning.png"
              alt="Learning without borders"
              className="h-[48px]"
            />
            <div className="border border-[#E9EAF0] h-[48px] w-[424px] flex items-center justify-start pl-4">
              <CiSearch className="text-[24px] text-slate-400" />
              <input
                type="search"
                placeholder="What do you want to learn"
                className="placeholder:pl-2 placeholder:text-sm placeholder:text-slate-400 w-full h-full active:border-none ring-0 focus:border-none"
              />
            </div>
          </div>
          <div className="space-x-6">
            <Button
              className="bg-[#FFEEE8] w-[168px] h-[48px] text-lwb_orange"
              text="Create Account"
            />
            <Button
              className="bg-lwb_orange w-[168px] h-[48px] text-white text-shadow-lg shadow-black"
              text="Sign In"
            />
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="block md:hidden fixed top-4 right-4 bg-lwb_orange text-white p-2 rounded-md z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile sidebar */}
        <MobileSidebar isOpen={isMenuOpen} />
      </nav>
    </header>
  );
};

const MobileSidebar = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={isOpen ? { x: 0 } : { x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg"
    >
      <ul className="pt-20 px-6 space-y-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Course</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/instructor">Become An Instructor</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
```
