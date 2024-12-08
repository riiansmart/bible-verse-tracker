import React, { useState, useEffect } from 'react';
import { getAllVerses, addToFavorites, deleteVerse } from '../services/bibleVerseService';
import { useNavigate } from 'react-router-dom';

function BibleVerseList() {
  const [verses, setVerses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBibleVerses();
  }, []);

  const fetchBibleVerses = async () => {
    try {
      const response = await getAllVerses();
      setVerses(response.data);
    } catch (err) {
      setError('Failed to load Bible verses. Please try again later.');
    }
  };

  const handleAddToFavorites = async (verse) => {
    try {
      await addToFavorites({ verseId: verse.verseId });
      alert('Verse added to favorites!');
    } catch (err) {
      alert('Failed to add verse to favorites.');
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

  return (
    <div className="container">
      <h2>Bible Verse List</h2>

      {/* Show error message if any */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Show loading spinner while data is being fetched */}
      {verses.length === 0 && !error && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {/* List of Bible Verses */}
      <ul className="list-group">
        {verses.map((verse) => (
          <li key={verse.verseId} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {verse.book} {verse.chapter}:{verse.verseNumber} - {verse.verseText}
            </span>
            <div>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => handleEditVerse(verse.verseId)}
              >
                Edit
              </button>
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
      {/* Buttons for adding and deleting verses */}
      <div className="mb-3">
        <button className="btn btn-success me-2" onClick={handleAddVerse}>
          Add Bible Verse
        </button>
      </div>
    </div>
  );
}

export default BibleVerseList;
