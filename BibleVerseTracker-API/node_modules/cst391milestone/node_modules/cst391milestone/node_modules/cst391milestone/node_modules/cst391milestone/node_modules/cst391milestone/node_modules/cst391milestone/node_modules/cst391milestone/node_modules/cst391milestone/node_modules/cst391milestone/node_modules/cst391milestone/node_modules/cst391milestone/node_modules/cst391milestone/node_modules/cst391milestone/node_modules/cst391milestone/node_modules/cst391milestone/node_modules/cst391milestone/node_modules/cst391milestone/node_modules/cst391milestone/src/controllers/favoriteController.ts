import { Request, Response } from 'express';
import connection from '../database';
import { Favorite } from '../models/favorite';
import { ResultSetHeader } from 'mysql2';

// GET all favorites
export const getFavorites = (req: Request, res: Response) => {
  connection.query('SELECT * FROM favorite', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// POST new favorite
export const addFavorite = (req: Request, res: Response) => {
  const { verseId } = req.body;
  const newFavorite = new Favorite(verseId);

  connection.query('INSERT INTO favorite SET ?', newFavorite, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    const insertResult = result as ResultSetHeader;
    res.json({ message: 'Favorite added successfully', favoriteId: insertResult.insertId });
  });
};

// DELETE favorite
export const deleteFavorite = (req: Request, res: Response) => {
    const { id } = req.params;
  
    connection.query('DELETE FROM favorite WHERE favoriteId = ?', id, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      const deleteResult = result as ResultSetHeader;  // Cast the result as ResultSetHeader
  
      if (deleteResult.affectedRows === 0) {
        return res.status(404).json({ message: 'Favorite not found' });
      }
  
      res.json({ message: 'Favorite deleted successfully' });
    });
  };