const router = require('express').Router();
const controller = require('./controllers.js');

router
  .route('/notes')
  .get(controller.getNotes);

router
  .route('/note/:id')
  .delete(controller.deleteNote);

router
  .route('/note')
  .post(controller.postNote);

router
  .route('/edit/:id')
  .put(controller.updateNote);

module.exports = router;