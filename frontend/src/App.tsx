// src/App.tsx

import React from 'react';
import './App.css';
import RatingComponent from './RatingComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Rate Categories
      </header>
      <RatingComponent category="Quality" />
      <RatingComponent category="Price" />
      <RatingComponent category="Durability" />
    </div>
  );
}

export default App;
