import React from "react";

export default function Footer() {
  return (
    <div className=" py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-black mb-4">Build. Review. Ship.</h1>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <h2 className="md:mr-6 pb-4 md:py-0 cursor-pointer text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
            Download Now
          </h2>
          <h2 className="cursor-pointer text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
            License
          </h2>
        </div>
        <div className="my-6 text-base">
          <ul className="flex flex-col md:flex-row items-center">
            <li className="md:mr-6 cursor-pointer py-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
              About
            </li>
            <li className="md:mr-6 cursor-pointer py-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
              Features
            </li>
            <li className="md:mr-6 cursor-pointer py-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
              Pricing
            </li>
            <li className="md:mr-6 cursor-pointer py-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
              Careers
            </li>
            <li className="md:mr-6 cursor-pointer py-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
              Help
            </li>
            <li className="cursor-pointer py-2 text-[var(--primary)] hover:text-[var(--primary-hover)] transition duration-150 ease-in-out">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="text-sm text-[var(--text-color)]">
          <p>
            © 2024 &nbsp;
            <span className="font-bold">
              Influncer
              <span className="text-[var(--primary)]">Hub</span>
            </span>
            . &nbsp; &nbsp;All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
