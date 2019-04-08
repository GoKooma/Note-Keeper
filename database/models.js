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
  tab: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const tabsSchema = new mongoose.Schema({
  tab: {
    type: String,
    required: true
  }
});

// Create data model
const Notes = mongoose.model('Notes', notesSchema);
const Tabs = mongoose.model('Tabs', tabsSchema);

module.exports = { Notes, Tabs };