require("dotenv").config({ path: "../.env" });
const { Pool } = require("pg");

const pool = new Pool({ connectionString: process.env.DB_URL });
const query = (text, params) => pool.query(text, params);

module.exports = { query };
