const db = require('../config/database');

exports.getAllBibleVerses = (req, res) => {
  db.query('SELECT * FROM bibleverse', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

exports.getBibleVerseById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM bibleverse WHERE verseId = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results[0]);
  });
};

exports.createBibleVerse = (req, res) => {
  const { book, chapter, verseNumber, verseText } = req.body;
  const dateAdded = new Date();
  db.query(
    'INSERT INTO bibleverse (book, chapter, verseNumber, verseText, dateAdded) VALUES (?, ?, ?, ?, ?)',
    [book, chapter, verseNumber, verseText, dateAdded],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Bible verse added', verseId: result.insertId });
    }
  );
};

exports.updateBibleVerse = (req, res) => {
  const { id } = req.params;
  const { book, chapter, verseNumber, verseText } = req.body;
  db.query(
    'UPDATE bibleverse SET book = ?, chapter = ?, verseNumber = ?, verseText = ? WHERE verseId = ?',
    [book, chapter, verseNumber, verseText, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(200).json({ message: 'Bible verse updated' });
    }
  );
};

exports.deleteBibleVerse = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM bibleverse WHERE verseId = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Bible verse deleted' });
  });
};
