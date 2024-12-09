const router = require('express').Router();
const booksController = require('../controllers/books');

// Index - display data
router.get('/', booksController.index);
router.get('/:id', booksController.show);

// New - display form to create new data
router.get('/new', booksController.addNew);

// Destroy - delete data
router.delete('/:id', booksController.delete);

// Update - update data in the database
router.put('/:id', booksController.update);

// Create - create new data in the database
router.post('/', booksController.create);

// Edit - display form to edit data
router.get('/:id/edit', booksController.edit);

module.exports = router;