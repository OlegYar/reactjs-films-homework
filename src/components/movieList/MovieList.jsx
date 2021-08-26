import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MovieListItem from '../movieListItem/MovieListItem';
import Spinner from '../spinner/Spinner';
import styles from './MovieList.module.scss';
import { loadingFilmsSelector } from '../../modules/selectors';

const MovieList = ({ films = [], genres }) => {
  const isFilmLoaded = useSelector(loadingFilmsSelector);
  const movieCards = films.map((movie) => (
    <li key={movie.id} className={styles.movieListItem}>
      <MovieListItem movie={movie} genres={genres} />
    </li>
  ));
  const spinner = isFilmLoaded ? <Spinner /> : null;
  return (
    <div className={styles.movieListContainer}>
      <ul className={styles.movieList}>
        {movieCards}
      </ul>
      {spinner}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  genres: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  films: null,
  genres: null,
};

export default MovieList;
