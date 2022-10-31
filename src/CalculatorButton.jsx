import React from "react";

function CalculatorButton({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black text-white rounded-md h-full w-full"
      >
        {children}
      </button>
    </div>
  );
}

export default CalculatorButton;
