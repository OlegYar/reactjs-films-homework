import React from 'react';
import styles from './Search.module.scss';

const Search = () => (
  <div className={styles.search}>
    <form className={styles.searchForm}>
      <input className={styles.searchInput} type="text" placeholder="Search here..." />
      <button data-testid="searchButton" className={styles.searchButton} type="button"> </button>
    </form>
  </div>
);

export default Search;
