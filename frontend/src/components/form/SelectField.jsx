import React, { useState } from "react";

const SelectField = ({ label, options, value, onChange, error }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative mb-4">
      <label className="text-sm leading-none text-gray-800">{label}</label>
      <button
        type="button"
        className={`w-full p-[11px] mt-3 rounded bg-gray-100 border   flex justify-between items-center  border-gray-200 text-gray-800 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800${
          error ? "border border-red-400" : ""
        }`}
        onClick={toggleDropdown}
      >
        {value || "Select..."}
        <svg
          className={`w-4 h-4 transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute z-20 mt-1 w-full bg-white border-t border-gray-200 rounded shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="w-full text-left text-sm px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 rounded"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      {error && <div className="text-red-500 text-xs mt-1 ml-3">{error}</div>}
    </div>
  );
};

export default SelectField;
