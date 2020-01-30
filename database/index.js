const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PASSPHRASE = process.env.MDB_PASSWORD;
const DB_ENV = process.env.MDB_ENV || "LOCAL";
const DB_URL = process.env.MDB_URL || "";
const usr = process.env.MDB_USER;

// Connect to mongodb
if (DB_ENV === "REMOTE_DB") {
  mongoose.connect(`mongodb+srv://${usr}:${PASSPHRASE}@${DB_URL}`, { useNewUrlParser: true });
} else if (DB_ENV === "LOCAL") {
  mongoose.connect(`mongodb://localhost/note-keeper`, { useNewUrlParser: true });
}
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

// If connection fails, return error message
db.on('error',(err) => console.error(err));
// If connection is successful, return success message
db.once('open', () => console.log('CONNECTED TO MONGODB!'))

module.exports = db;
