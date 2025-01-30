import React from "react";
import { useStore } from "../store";

export const Navbar = () => {
  const { toggleModal, searchQuery, setSearchQuery } = useStore();
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between px-16">
      <a className="btn btn-ghost text-xl">daisyUI</a>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered outline-0 border-0 w-32 lg:w-80 md:w-auto"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => toggleModal(null)}>
        Add Client
      </button>
    </div>
  );
};
