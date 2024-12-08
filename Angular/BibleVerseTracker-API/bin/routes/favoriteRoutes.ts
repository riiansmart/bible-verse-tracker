import { Router } from 'express';
import { getFavorites, addFavorite, deleteFavorite } from '../controllers/favoriteController';

const router = Router();

// GET all favorites
router.get('/favorites', getFavorites);

// POST new favorite
router.post('/favorites', addFavorite);

// DELETE favorite by ID
router.delete('/favorites/:id', deleteFavorite);

export default router;
