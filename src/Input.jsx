import React from "react";

function Input({ placeholder, value, onChange, type }) {
  return (
    <input
      className="h-full w-full p-2 mb-2 border-4 border-blue-500 focus:outline-none focus:border-red-500 font-semibold"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
