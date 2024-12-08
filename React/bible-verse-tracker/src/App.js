import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BibleVerseList from './components/BibleVerseList';
import BibleVerseCreate from './components/BibleVerseCreate';
import BibleVerseEdit from './components/BibleVerseEdit';
import BibleVerseDelete from './components/BibleVerseDelete';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Home</a>
          <span className="navbar-brand mx-auto">Bible Verse Tracker &#10013;</span>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<BibleVerseList />} />
        <Route path="/create" element={<BibleVerseCreate />} />
        <Route path="/edit/:id" element={<BibleVerseEdit />} />
        <Route path="/delete" element={<BibleVerseDelete />} />
      </Routes>
    </Router>
  );
}

export default App;