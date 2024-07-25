import React from "react";

const InputField = ({ label, type, value, onChange, error, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded ${
        error ? "border-red-500" : ""
      }`}
      required
    />
    {error && <div className="text-red-500 text-xs ml-2">{error}</div>}
  </div>
);

export default InputField;
