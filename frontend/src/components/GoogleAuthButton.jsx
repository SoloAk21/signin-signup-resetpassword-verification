// src/components/GoogleAuthButton.js

import React from "react";
import { FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const GoogleAuthButton = ({ text, isLoading }) => (
  <a
    href={isLoading ? "#" : "/api/auth/google"}
    onClick={(e) => {
      if (isLoading) e.preventDefault();
    }}
    className={`flex items-center bg-white border border-gray-300 rounded text-gray-800 shadow-md px-6 py-2 text-xs font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full justify-center ${
      isLoading ? "cursor-not-allowed" : ""
    }`}
  >
    <FcGoogle className="mx-1 text-md" />
    {isLoading ? (
      <>
        <FaSpinner className="animate-spin mr-2" />
        {text}...
      </>
    ) : (
      <span>{text}</span>
    )}
  </a>
);

export default GoogleAuthButton;
