const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getCategories);
router.get('/api/category-channels', homeController.getCategoryChannels);

module.exports = router;
