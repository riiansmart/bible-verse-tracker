const db = require('../config/database');

exports.getAllFavorites = (req, res) => {
  db.query('SELECT * FROM favorite', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

exports.addFavorite = (req, res) => {
  const { verseId } = req.body;
  const dateFavorited = new Date();
  db.query(
    'INSERT INTO favorite (verseId, dateFavorited) VALUES (?, ?)',
    [verseId, dateFavorited],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Favorite added', favoriteId: result.insertId });
    }
  );
};

exports.removeFavorite = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM favorite WHERE favoriteId = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Favorite removed' });
  });
};
