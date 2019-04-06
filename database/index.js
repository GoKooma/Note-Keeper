const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/note-keeper', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

// If connection fails, return error message
db.on('error',(err) => console.error(err));
// If connection is successful, return success message
db.once('open', () => console.log('CONNECTED TO MONGODB!'))

module.exports = db;
