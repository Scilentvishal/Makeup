import mysql from 'mysql';

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "freewebt_vishal",
  password: "Scilent12@",
  database: "freewebt_commatech",
});

module.exports = db;