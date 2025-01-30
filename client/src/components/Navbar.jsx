import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between px-16">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered outline-0 border-0 w-32 lg:w-80 md:w-auto"
        />
      <button className="btn btn-primary">Add Client</button>
    </div>
  );
};
