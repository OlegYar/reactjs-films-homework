import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults, fetchGenres } from '../../services/fetchingData';
import { cleanFilmsAction } from '../../modules/actions';
import MovieList from '../movieList';
import NoResults from '../noResults';
import Spinner from '../spinner';
import {
  filmsSelector, loadingFilmsSelector, currentPageSelector, genresSelector,
} from '../../modules/selectors';

const SearchResults = ({ value }) => {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);
  const isLoading = useSelector(loadingFilmsSelector);
  const currentPage = useSelector(currentPageSelector);
  const genres = useSelector(genresSelector);
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
  let result = films[0] ? <MovieList films={films} genres={genres} /> : <NoResults />;
  if (currentPage === 1 && isLoading) {
    result = <Spinner />;
  }
  return (
    <>
      {result}
    </>
  );
};

SearchResults.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchResults;
