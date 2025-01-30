import React, { useEffect } from "react";
import Input from "./Input";
import RoleSelect from "./RoleSelect";

export const Modal = () => {
  
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Client Details</h3>
        <div className="flex flex-col gap-4 mt-6">
          <Input title="Name" placeholder="Enter your name" />
          <Input title="Email" placeholder="Enter your email" />
          <Input title="Job" placeholder="What Job Role do you have?" />
          <div className="flex">
            <Input title="Rate" placeholder="Rate?" type="number"/>
            <RoleSelect />
          </div>
          <button className="btn btn-soft">Add Client</button>
        </div>
      </div>
    </dialog>
  );
};
