// get the client
const mysql = require("mysql2");
require("dotenv/config");

// create the connection to database
const db = process.env.SQL_DATABASE;
const password = process.env.SQL_PASSWORD;
const connection = mysql.createConnection({
  host: "gg",
  user: "root",
  database: "hackathon_advanced",
  password: password,
});
module.exports = { connection };