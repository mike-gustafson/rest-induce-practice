const router = require('express').Router();
const usersController = require('../controllers/users');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, usersController.index);
router.get('/edit', ensureAuthenticated, usersController.edit);
router.get('/delete', ensureAuthenticated, usersController.confirmDelete);  
router.delete('/delete', ensureAuthenticated, usersController.delete);
router.put('/edit', ensureAuthenticated, usersController.update);

module.exports = router;