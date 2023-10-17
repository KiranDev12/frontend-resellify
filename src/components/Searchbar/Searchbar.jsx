import React, { useState } from 'react';
import './Searchbar.css';  // Import the CSS file for styles

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"  // Apply a class for input styling
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default Searchbar;
