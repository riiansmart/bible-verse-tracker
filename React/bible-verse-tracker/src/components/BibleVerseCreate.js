import React, { useState } from 'react';
import { createVerse } from '../services/bibleVerseService';

function BibleVerseCreate() {
  const [formData, setFormData] = useState({
    book: '',
    chapter: '',
    verseNumber: '',
    verseText: '',
    dateAdded: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVerse(formData);
      alert('Bible verse created successfully!');
      setFormData({
        book: '',
        chapter: '',
        verseNumber: '',
        verseText: '',
        dateAdded: new Date().toISOString(),
      }); // Reset form
    } catch (err) {
      alert('Failed to create Bible verse.');
    }
  };

  return (
    <div className="container">
      <h2>Add A New Bible Verse</h2>
      <form onSubmit={handleSubmit}>
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
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Create
        </button>
      </form>
    </div>
  );
}

export default BibleVerseCreate;
