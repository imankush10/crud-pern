import React, { useEffect } from "react";
import Input from "./Input";
import RoleSelect from "./RoleSelect";
import { useStore } from "../store";

export const Modal = () => {
  const {
    isModalOpen,
    toggleModal,
    currentClient,
    updateCurrentClient,
    editMode,
    addClient,
    updateClient,
  } = useStore();

  useEffect(() => {
    if (isModalOpen) document.querySelector(".modal").showModal();
    else document.querySelector(".modal").close();
  }, [isModalOpen]);

  const handleChange = (key) => (event) => {
    updateCurrentClient(key, event.target.value);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => toggleModal(null)}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Client Details</h3>
        <div className="flex flex-col gap-4 mt-6">
          <Input
            title="Name"
            placeholder="Enter your name"
            value={currentClient?.name || ""}
            onChange={handleChange("name")}
          />
          <Input
            title="Email"
            placeholder="Enter your email"
            value={currentClient?.email || ""}
            onChange={handleChange("email")}
          />
          <Input
            title="Job"
            placeholder="What Job Role do you have?"
            value={currentClient?.job || ""}
            onChange={handleChange("job")}
          />
          <div className="flex">
            <Input
              title="Rate"
              placeholder="Rate?"
              type="number"
              value={currentClient?.rate || 0}
              onChange={handleChange("rate")}
            />
            <RoleSelect
              value={currentClient?.status || ""}
              onChange={handleChange("status")}
            />
          </div>
          <button
            className="btn btn-soft"
            onClick={() => {
              editMode ? updateClient() : addClient();
            }}
          >
            {editMode ? "Upload Client" : "Add Client"}
          </button>
        </div>
      </div>
    </dialog>
  );
};
