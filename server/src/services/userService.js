const db = require("../db.js");

const getAllClients = async () => {
  const res = await db.query("SELECT * FROM clients_tb");
  return res.rows;
};

module.exports = { getAllClients };
