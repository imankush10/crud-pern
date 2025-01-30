import React from "react";

const RoleSelect = () => {
  return (
    <select className="select select-bordered w-full max-w-xs focus-within:border-0">
      <option>Active</option>
      <option>Inactive</option>
    </select>
  );
};

export default RoleSelect;
