const router = require('express').Router();
const authController = require('../controllers/auth');

router.get('/login', authController.login);
router.post('/login', authController.authenticate);
router.get('/register', authController.register);
router.post('/register', authController.createUser);
router.get('/logout', authController.logout);
router.delete('/delete', authController.delete);

module.exports = router;
