const mongoose = require('mongoose');
const db = require('./index.js');

// Create data schema
const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// Create data model
const Notes = mongoose.model('Notes', notesSchema);

module.exports = { Notes };