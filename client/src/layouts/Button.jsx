import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="px-6 py-1 border-2 border-white hover:text-[#AB6B2E] transition-all rounded-full"
        style={{ color: `${props.color}` }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
