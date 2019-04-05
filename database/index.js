const { Pool } = require('pg');
// const Sequelize = require("sequelize");

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'note_keeper',
  user: 'postgres',
  password: 'leftrocks'
});

pool.connect() 
  .then(() => console.log("PostgreSQL CONNECTION SUCCESSFUL"))
  .catch(err => console.error(err));

module.exports = pool;
