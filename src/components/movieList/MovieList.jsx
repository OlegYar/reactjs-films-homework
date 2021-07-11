import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTrendingFilmsAction, loadGenresAction } from '../../modules/reducer';
import TheMovieDbService from '../../services';
import MovieListItem from '../movieListItem/MovieListItem';
import styles from './MovieList.module.scss';

const movieApi = new TheMovieDbService();

const fetchTrendingFilms = (page) => (dispatch) => {
  movieApi.getTrendingMovies(page).then((films) => dispatch(loadTrendingFilmsAction(films)));
};

const fetchGenres = () => (dispatch) => {
  movieApi.getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};

const MovieList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const genres = useSelector((state) => state.genres);
  let movieCards;
  if (films) {
    movieCards = films.map((movie) => (
      <li key={movie.id} className={styles.movieListItem}>
        <MovieListItem movie={movie} genres={genres} />
      </li>
    ));
  }
  useEffect(() => {
    dispatch(fetchTrendingFilms(1));
    dispatch(fetchGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.movieListContainer}>
      <ul className={styles.movieList}>
        {movieCards}
      </ul>
    </div>
  );
};

export default MovieList;
