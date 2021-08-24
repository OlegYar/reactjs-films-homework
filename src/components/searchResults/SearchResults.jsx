import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults, fetchGenres } from '../../services/fetchingData';
import { cleanFilmsAction } from '../../modules/actions';
import MovieList from '../movieList/MovieList';
import styles from './SearchResults.module.scss';
import {
  filmsSelector, loadingFilmsSelector, currentPageSelector, genresSelector,
} from '../../modules/selectors';

const SearchResults = ({ value }) => {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);
  const isLoading = useSelector(loadingFilmsSelector);
  const currentPage = useSelector(currentPageSelector);
  const genres = useSelector(genresSelector);
  const noResults = (
    <div className={styles.noResults}>
      <p className={styles.smile}><i className="far fa-sad-tear" /></p>
      <p className={styles.sorryText}>There&apos;s no results</p>
    </div>
  );
  useEffect(() => {
    dispatch(cleanFilmsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchSearchResults(value, currentPage));
    }
    dispatch(fetchGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  useEffect(() => () => {
    dispatch(cleanFilmsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      { films[0] ? <MovieList films={films} genres={genres} /> : noResults }
    </>
  );
};

SearchResults.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchResults;
