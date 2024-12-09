const router = require('express').Router();
const seedController = require('../controllers/seed');

router.post('/', seedController.seed);

module.exports = router;