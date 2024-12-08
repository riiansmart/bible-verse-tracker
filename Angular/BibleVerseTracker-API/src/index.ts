import express from 'express';
import bibleVerseRoutes from './routes/bibleVerseRoutes';
import favoriteRoutes from './routes/favoriteRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:4200' // Replace with your frontend URL
}));

app.use(express.json());

// Register API routes with /api prefex
app.use('/api', bibleVerseRoutes);
app.use('/api', favoriteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
