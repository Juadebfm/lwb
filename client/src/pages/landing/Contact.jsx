import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import { Check, Mail } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@learning247.org";

  const handleEmailClick = async (e) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);

      // Open default email client
      window.location.href = `mailto:${email}`;
    } catch (err) {
      // Fallback if clipboard API fails
      window.location.href = `mailto:${email}`;
    }
  };

  const CustomButton = (
    <button
      onClick={handleEmailClick}
      className="bg-lwb_orange px-4 hover:bg-lwb_black text-white flex items-center justify-between h-[48px] group w-full md:w-[50%] lg:w-[196px]"
    >
      <span className="flex items-center gap-2">
        {copied ? (
          <>
            <Check size={20} />
            <span>Email Copied!</span>
          </>
        ) : (
          <>
            <Mail size={20} />
            <span>Contact Us</span>
          </>
        )}
      </span>
      <span className="group-hover:animate-pulse">→</span>
    </button>
  );

  return (
    <div className="min-h-screen">
      <div className="h-[5rem] md:h-[10rem]"></div>

      <div className="bg-[#F5F7FA] h-[150px] flex flex-col items-center justify-center">
        <h2 className="text-center font-semibold capitalize text-[24px]">
          Contact
        </h2>

        <div className="text-sm">
          <Link
            to="/"
            className="text-[#6E7485] hover:underline underline-offset-4 hover:text-lwb_black duration-150 transition-all ease-linear"
          >
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-lwb_black">Contact</span>
        </div>
      </div>

      <div className="h-max">
        <Hero
          title="Connect With Us"
          titleStyle="capitalize"
          description="Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello."
          imageSrc="/contact.jpg"
          imageAlt="Web Development"
          imagePosition="alongside"
          withBackground={false}
          descriptionWidth="70%"
          imageClassName="h-full w-full"
          img="w-full h-[100%]"
          contentWidth="100%"
          CustomButton={CustomButton}
        />
      </div>
    </div>
  );
};

export default Contact;
