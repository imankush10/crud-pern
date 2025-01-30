import React from "react";

const RoleSelect = ({value, onChange}) => {
  return (
    <select className="select select-bordered w-full max-w-xs focus-within:border-0" value={value} onChange={onChange}>
      <option>Active</option>
      <option>Inactive</option> 
    </select>
  );
};

export default RoleSelect;
