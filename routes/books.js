const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/', booksController.index);
router.get('/new', booksController.addNew);
router.get('/:id', booksController.show);
router.get('/:id/edit', booksController.edit);
router.post('/', booksController.create);
router.delete('/:id', booksController.delete);
router.put('/:id', booksController.update);


module.exports = router;