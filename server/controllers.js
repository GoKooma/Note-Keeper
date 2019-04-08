const db = require('../database/dbHelper.js');

module.exports = {
  // retrieve all notes from database and send them to client
  getNotes: (req, res) => {
    db.fetch((err, notes) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        res.status(200).json(notes);
      }
    })
  },
  // delete the note with given id
  deleteNote: (req, res) => {
    let { id } = req.params;
    db.delete(id, (err) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        res.status(202).end();
      }
    })
  },
  // create note in database to have it persist
  postNote: (req, res) => {
    db.post(req.body, (err) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        res.status(201).end();
      }
    })
  },
  // edit the content of the note
  updateNote: (req, res) => {
    db.update(req.body.params, (err) => {
      if (err) {
        console.error(err);
        res.status(404).send(err);
      } else {
        res.status(202).end();
      }
    })
  }
}