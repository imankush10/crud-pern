import React, { useEffect } from "react";
import TableRow from "./TableRow";
import { useStore } from "../store";

export const Table = () => {
  const { clients, searchQuery, fetchClients } = useStore();

  useEffect(() => {
    fetchClients();
  }, []);

  const filteredClients = clients?.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.job.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <TableRow
              id={client.id}
              name={client.name}
              email={client.email}
              job={client.job}
              rate={client.rate}
              status={client.status == true ? "active" : "inactive"}
              key={client.email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
