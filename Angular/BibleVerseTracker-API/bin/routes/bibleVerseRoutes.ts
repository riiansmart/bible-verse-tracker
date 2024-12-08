import { Router } from 'express';
import { getBibleVerses, addBibleVerse, updateBibleVerse, deleteBibleVerse } from '../controllers/bibleVerseController';

const router = Router();

router.get('/verses', getBibleVerses);
router.post('/verses', addBibleVerse);
router.put('/verses/:id', updateBibleVerse);
router.delete('/verses/:id', deleteBibleVerse);

export default router;
