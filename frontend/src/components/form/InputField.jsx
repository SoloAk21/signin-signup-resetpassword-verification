import React from "react";

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="text-sm leading-none text-gray-800">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      className={`w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800 ${
        error ? "border border-red-400" : ""
      }`}
      required
    />
    {error && <div className="text-red-500 text-xs mt-1 ml-2"> {error}</div>}
  </div>
);

export default InputField;
