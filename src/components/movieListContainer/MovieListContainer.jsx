import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms, fetchGenres } from '../../services/fetchingData';
import MovieList from '../movieList/MovieList';
import { cleanFilmsAction } from '../../modules/actions';
import {
  filmsSelector, loadingFilmsSelector, currentPageSelector, genresSelector,
} from '../../modules/selectors';

const MovieListContainer = ({ listType }) => {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);
  const isLoading = useSelector(loadingFilmsSelector);
  const currentPage = useSelector(currentPageSelector);
  const genres = useSelector(genresSelector);
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchFilms(listType, currentPage));
    }
    dispatch(fetchGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  useEffect(() => () => {
    dispatch(cleanFilmsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MovieList films={films} genres={genres} />
  );
};

MovieListContainer.propTypes = {
  listType: PropTypes.string.isRequired,
};

export default MovieListContainer;
