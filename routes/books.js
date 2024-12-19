const router = require('express').Router();
const booksController = require('../controllers/books');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, booksController.index);
router.get('/:id', ensureAuthenticated, booksController.show);
router.get('/new', ensureAuthenticated, booksController.addNew);
router.delete('/:id', ensureAuthenticated, booksController.delete);
router.put('/:id', ensureAuthenticated, booksController.update);
router.post('/', ensureAuthenticated, booksController.create);
router.get('/:id/edit', ensureAuthenticated, booksController.edit);

module.exports = router;