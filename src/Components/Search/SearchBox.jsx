import React, { useState } from 'react';
import styles from './searchbox.module.css'; // ✅ Use object import for CSS Modules

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={handleChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
