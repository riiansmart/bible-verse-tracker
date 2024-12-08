const express = require('express');
const router = express.Router();
const bibleVerseController = require('../controllers/bibleVerseController');

router.get('/', bibleVerseController.getAllBibleVerses);
router.get('/:id', bibleVerseController.getBibleVerseById);
router.post('/', bibleVerseController.createBibleVerse);
router.put('/:id', bibleVerseController.updateBibleVerse);
router.delete('/:id', bibleVerseController.deleteBibleVerse);

module.exports = router;
