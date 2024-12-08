import React, { useState, useEffect } from 'react';
import { getAllVerses, addToFavorites, getFavorites, deleteFavorite, deleteVerse } from '../services/bibleVerseService';
import { useNavigate } from 'react-router-dom';

function BibleVerseList() {
  const [verses, setVerses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');
  const [viewFavorites] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBibleVerses();
    fetchFavorites(); // Load favorites on mount
  }, []);

  const fetchBibleVerses = async () => {
    try {
      const response = await getAllVerses();
      setVerses(response.data);
    } catch (err) {
      setError('Failed to load Bible verses. Please try again later.');
    }
  };

  const handleAddVerse = () => {
    navigate(`/create`); // Navigate to the add verse page
  };

  const handleEditVerse = (verseId) => {
    navigate(`/edit/${verseId}`); // Navigate to the edit page for the selected verse
  };

  const handleDeleteVerse = async (verseId) => {
    try {
      await deleteVerse(verseId);
      alert('Bible verse deleted successfully!');
      fetchBibleVerses(); // Refresh the list after deletion
    } catch (err) {
      alert('Failed to delete Bible verse.');
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await getFavorites();
      setFavorites(response.data);
    } catch (err) {
      console.error('Failed to load favorite Bible verses');
    }
  };

  const handleAddToFavorites = async (verse) => {
    try {
      if (favorites.some((fav) => fav.verseId === verse.verseId)) {
        await deleteFavorite(verse.verseId);
        fetchFavorites(); // Refresh the list after removal
        alert('Favorite removed successfully!');
      } else {
        await addToFavorites({ verseId: verse.verseId });
        fetchFavorites(); // Refresh the list after adding
        alert('Verse added to favorites!');
      }
    } catch (err) {
      alert('Failed to toggle favorite.');
    }
  };

  const displayedVerses = viewFavorites ? favorites : verses;

  return (
    <div className="container">
      <h2>Bible Verse List</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {verses.length === 0 && !error && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <ul className="list-group">
        {displayedVerses.map((verse) => (
          <li key={verse.verseId} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {verse.book} {verse.chapter}:{verse.verseNumber} - {verse.verseText}
            </span>
            <div>
              {/* Button for favoriting verses */}
              <button
                className={`btn btn-sm ${favorites.some((fav) => fav.verseId === verse.verseId) ? 'btn-warning' : 'btn-outline-warning'} me-2`}
                onClick={() => handleAddToFavorites(verse)} // Calls the API to add/remove from favorites
              >
                ★
              </button>
              {/* button to edit verse */}
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => handleEditVerse(verse.verseId)}
              >
                Edit
              </button>
              {/* button to delete verse */}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteVerse(verse.verseId)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <br />

      <div className="mb-3">
        {/* button to add a new Bible verse */}
        <button className="btn btn-success me-2" onClick={handleAddVerse}>
          Add Bible Verse
        </button>
      </div>
    </div>
  );
}

export default BibleVerseList;
