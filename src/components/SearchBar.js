import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;
