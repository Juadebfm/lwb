import React from "react";

function Button({ children, className, onClick }) {
  return (
    <button
      className={`py-2 px-4 rounded-md text-[15px] hover:shadow-lg shadow-black/30 duration-150 transition-all ease-linear ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
