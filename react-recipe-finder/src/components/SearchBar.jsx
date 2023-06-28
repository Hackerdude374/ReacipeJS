import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
