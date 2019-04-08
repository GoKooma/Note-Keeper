const { Notes } = require('./models.js');

module.exports = {
  // fetch all notes
  fetch: (callback) => {
    return Notes.find({}, null, { sort: '-date' }, callback);
  },
  // delete the note with given id
  delete: (id, callback) => {
    return Notes.deleteOne({ _id: id }, callback);
  },
  // save the note to mongodb
  post: (note, callback) => {
    return Notes.create({ content: note.content, title: note.title }, callback);
  },
  // edit the content of the note
  update: (params, callback) => {
    let { id, title, content } = params;
    return Notes.updateOne(
      { _id: id },
      { 
        title: title,
        content: content 
      }, callback);
  }
}