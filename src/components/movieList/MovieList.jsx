import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrendingFilms, fetchGenres } from '../../services/fetchingData';
import MovieListItem from '../movieListItem/MovieListItem';
import Spinner from '../spinner/Spinner';
import styles from './MovieList.module.scss';

const MovieList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const isFilmLoaded = useSelector((state) => state.loadingFilms);
  const genres = useSelector((state) => state.genres);
  const movieCards = films
    ? films.map((movie) => (
      <li key={movie.id} className={styles.movieListItem}>
        <MovieListItem movie={movie} genres={genres} />
      </li>
    ))
    : null;
  const spinner = isFilmLoaded ? <Spinner /> : null;
  /* if (films) {
    movieCards = films.map((movie) => (
      <li key={movie.id} className={styles.movieListItem}>
        <MovieListItem movie={movie} genres={genres} />
      </li>
    ));
  } */
  useEffect(() => {
    dispatch(fetchTrendingFilms(1));
    dispatch(fetchGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.movieListContainer}>
      <ul className={styles.movieList}>
        {movieCards}
        {spinner}
      </ul>
    </div>
  );
};

export default MovieList;
