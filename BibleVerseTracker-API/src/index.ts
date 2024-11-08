import express from 'express';
import bibleVerseRoutes from './routes/bibleVerseRoutes';
import favoriteRoutes from './routes/favoriteRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', bibleVerseRoutes);
app.use('/api', favoriteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
