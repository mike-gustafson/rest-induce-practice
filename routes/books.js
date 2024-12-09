const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/', booksController.index);
router.get('/new', booksController.addNew);
router.get('/:id', booksController.show);
router.post('/new', booksController.create);
router.delete('/:id', booksController.delete);
router.put('/:id', booksController.update);

module.exports = router;