import React from "react";

const Input = ({ title, placeholder, type="text" }) => {
  return (
    <label className="input focus-within:border-0 w-full">
      <span>{title}</span>
      <input type={type} className="grow" placeholder={placeholder} />
    </label>
  );
};

export default Input;
