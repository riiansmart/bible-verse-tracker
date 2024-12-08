import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { getVerseById, updateVerse } from '../services/bibleVerseService';

function BibleVerseEdit() {
  const { id } = useParams(); // Access the route parameter
  const [formData, setFormData] = useState({
    book: '',
    chapter: '',
    verseNumber: '',
    verseText: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchVerse();
  }, []);

  const fetchVerse = async () => {
    try {
      const response = await getVerseById(id); // Use the ID from the route parameter
      setFormData(response.data);
    } catch (err) {
      setError('Failed to load Bible verse.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateVerse(id, formData); // Use the ID for updating
      alert('Bible verse updated successfully!');
    } catch (err) {
      alert('Failed to update Bible verse.');
    }
  };

  return (
    <div className="container">
      <h2>Edit Bible Verse</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="book">Book</label>
          <input
            type="text"
            className="form-control"
            id="book"
            name="book"
            value={formData.book}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="chapter">Chapter</label>
          <input
            type="number"
            className="form-control"
            id="chapter"
            name="chapter"
            value={formData.chapter}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="verseNumber">Verse</label>
          <input
            type="number"
            className="form-control"
            id="verseNumber"
            name="verseNumber"
            value={formData.verseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="verseText">Verse Text</label>
          <textarea
            className="form-control"
            id="verseText"
            name="verseText"
            value={formData.verseText}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BibleVerseEdit;
