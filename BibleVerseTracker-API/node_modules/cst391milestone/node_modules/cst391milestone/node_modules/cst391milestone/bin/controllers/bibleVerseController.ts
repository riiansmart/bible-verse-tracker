import { Request, Response } from 'express';
import connection from '../database';
import { BibleVerse } from '../models/bibleVerse';
import { ResultSetHeader } from 'mysql2';  // Import ResultSetHeader


// GET all verses
export const getBibleVerses = (req: Request, res: Response) => {
  connection.query('SELECT * FROM bibleverse', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// POST new verse
export const addBibleVerse = (req: Request, res: Response) => {
    const { book, chapter, verseNumber, verseText } = req.body;
    const newVerse = new BibleVerse(book, chapter, verseNumber, verseText);
    
    connection.query('INSERT INTO bibleverse SET ?', newVerse, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      const insertResult = result as ResultSetHeader;  // Cast the result as ResultSetHeader
  
      res.json({ message: 'Verse added successfully', verseId: insertResult.insertId });
    });
  };

// PUT update verse
export const updateBibleVerse = (req: Request, res: Response) => {
  const { id } = req.params;
  const { book, chapter, verseNumber, verseText } = req.body;

  connection.query('UPDATE bibleverse SET ? WHERE verseId = ?', 
  [{ book, chapter, verseNumber, verseText }, id], (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: 'Verse updated successfully' });
  });
};

// DELETE verse
export const deleteBibleVerse = (req: Request, res: Response) => {
  const { id } = req.params;

  connection.query('DELETE FROM bibleverse WHERE verseId = ?', id, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: 'Verse deleted successfully' });
  });
};
