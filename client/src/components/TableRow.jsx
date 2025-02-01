import React from "react";
import { useStore } from "../store";

const TableRow = ({ id, name, email, job, rate, status }) => {
  const { toggleModal, removeClient } = useStore();


  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{job}</td>
      <td>{rate}</td>
      <td>
        <span
          className={`badge ${
            status === "ACTIVE" ? "badge-success" : "badge-warning"
          } badge-outline p-4 rounded-4xl`}
        >
          {status}
        </span>
      </td>
      <td>
        <button
          className="btn btn-soft btn-info rounded-md"
          onClick={() => toggleModal(id)}
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-soft btn-error rounded-md"
          onClick={() => removeClient(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
