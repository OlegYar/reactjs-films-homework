import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MovieListItem from '../movieListItem/MovieListItem';
import Spinner from '../spinner/Spinner';
import styles from './MovieList.module.scss';

const MovieList = ({ films, genres }) => {
  const isFilmLoaded = useSelector((state) => state.loadingFilms);
  const movieCards = films
    ? films.map((movie) => (
      <li key={movie.id} className={styles.movieListItem}>
        <MovieListItem movie={movie} genres={genres} />
      </li>
    ))
    : null;
  const spinner = isFilmLoaded ? <Spinner /> : null;
  return (
    <div className={styles.movieListContainer}>
      <ul className={styles.movieList}>
        {movieCards}
        {spinner}
      </ul>
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
