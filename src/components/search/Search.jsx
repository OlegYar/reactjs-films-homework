import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchValueAction } from '../../modules/reducer';
import { fetchSearchResults } from '../../services/fetchingData';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue);
  return (
    <div className={styles.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchValue) {
            dispatch(fetchSearchResults(searchValue, 1));
          }
        }}
        className={styles.searchForm}
      >
        <input
          onChange={(e) => dispatch(changeSearchValueAction(e.target.value))}
          className={styles.searchInput}
          type="text"
          placeholder="Search here..."
          value={searchValue}
        />
        <button data-testid="searchButton" className={styles.searchButton} type="submit"> </button>
      </form>
    </div>
  );
};

export default Search;
