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
  const { verseId } = req.params;
  
  db.query(
    'DELETE FROM favorite WHERE verseId = ?',
    [verseId],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Favorite not found' });
      }
      res.status(200).json({ message: 'Favorite removed successfully' });
    }
  );
};
