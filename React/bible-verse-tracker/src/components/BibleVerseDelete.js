import React, { useEffect, useState } from 'react';
import { getAllVerses, deleteVerse } from '../services/bibleVerseService';

function BibleVerseDelete() {
  const [verses, setVerses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBibleVerses();
  }, []);

  const fetchBibleVerses = async () => {
    try {
      const response = await getAllVerses();
      setVerses(response.data);
    } catch (err) {
      setError('Failed to load Bible verses.');
    }
  };

  const handleDelete = async (verseId) => {
    const confirmation = window.confirm(
      'Are you sure you want to delete this verse?'
    );
    if (confirmation) {
      try {
        await deleteVerse(verseId);
        fetchBibleVerses();
      } catch (err) {
        alert('Failed to delete Bible verse.');
      }
    }
  };

  return (
    <div>
      <h2>Delete a Bible Verse</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul>
        {verses.map((verse) => (
          <li key={verse.verseId}>
            {verse.book} {verse.chapter}:{verse.verseNumber}
            <button onClick={() => handleDelete(verse.verseId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BibleVerseDelete;
