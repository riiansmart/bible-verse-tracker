const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

router.get('/', favoriteController.getAllFavorites);
router.post('/', favoriteController.addFavorite);
router.delete('/:verseId', favoriteController.removeFavorite);

module.exports = router;