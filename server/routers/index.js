const router = require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/items', controllers.getItems);

module.exports = router;