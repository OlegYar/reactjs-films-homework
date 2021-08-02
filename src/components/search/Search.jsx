import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeSearchValueAction } from '../../modules/reducer';
import styles from './Search.module.scss';

const Search = ({ history }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue);
  return (
    <div className={styles.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchValue) {
            history.push(`/search/${searchValue}`);
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

Search.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
};

export default withRouter(Search);
