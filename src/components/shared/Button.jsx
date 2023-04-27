import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-blue-gradient text-white px-4 py-2 rounded-md hover:scale-[1.025] transition-all duration-300 ease ml-auto ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
