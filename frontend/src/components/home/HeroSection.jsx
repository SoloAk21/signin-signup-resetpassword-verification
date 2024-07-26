import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      {/* Hero section */}
      <div className="transition-colors duration-500 bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-black leading-7 md:leading-10">
              Influencers and Company to
              <span className="text-[var(--primary)]"> Collaborate </span>
              Seamlessly
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 font-normal text-center text-sm sm:text-lg">
              Join our platform to create impactful partnerships, manage
              campaigns, and grow your influence. Whether you're an influencer
              or a brand, we provide the tools to succeed together.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out hover:bg-[var(--primary)] bg-[var(--primary)] lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 border border-[var(--primary)] py-2 sm:py-4 text-sm"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button
              onClick={handleSignIn}
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out hover:border-[var(--primary)] bg-transparent border border-[var(--primary)] rounded text-[var(--primary)] px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
