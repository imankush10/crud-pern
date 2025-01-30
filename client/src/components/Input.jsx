import React from "react";

const Input = ({ title, placeholder, type = "text", value, onChange }) => {
  return (
    <label className="input focus-within:border-0 w-full">
      <span>{title}</span>
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
