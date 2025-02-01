const db = require("../db");

const getAllClients = async () => {
  const query = "SELECT * FROM clients_tb";
  const result = await db.query(query);
  return result.rows;
};

const createClient = async ({ name, email, job, rate, status }) => {
  const query = `
    INSERT INTO clients_tb (name, email, job, rate, status)
    VALUES ($1, $2, $3, $4, $5)
  `;
  const values = [name, email, job, rate, status];
  await db.query(query, values);
};

const updateClient = async ({ id, name, email, job, rate, status }) => {
  const query = `
    UPDATE clients_tb
    SET
      name = COALESCE($1, name),
      email = COALESCE($2, email),
      job = COALESCE($3, job),
      rate = COALESCE($4, rate),
      status = COALESCE($5, status)
    WHERE id = $6;
  `;
  const values = [name, email, job, rate, status, id];
  await db.query(query, values);
};

const deleteClient = async (id) => {
  const query = "DELETE FROM clients_tb WHERE id = $1";
  const values = [id];
  await db.query(query, values);
};

module.exports = { getAllClients, createClient, updateClient, deleteClient };
