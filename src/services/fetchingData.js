import TheMovieDbService from '.';
import {
  openModalAction, loadGenresAction, loadTrendingFilmsAction, loadMainFilmAction,
  loadRuntimeOfFilmAction,
} from '../modules/reducer';

const movieApi = new TheMovieDbService();

export const fetchVideo = (id) => (dispatch) => {
  movieApi.getVideo(id).then((key) => dispatch(openModalAction(key)));
};

export const fetchTrendingFilms = (page) => (dispatch) => {
  movieApi.getTrendingMovies(page).then((films) => dispatch(loadTrendingFilmsAction(films)));
};

export const fetchMainFilm = () => (dispatch) => {
  movieApi.getMainMovie().then((movie) => dispatch(loadMainFilmAction(movie)));
};

export const fetchRuntimeOfFilm = (id) => (dispatch) => {
  movieApi.getRuntimeOfMovie(id).then((runtime) => dispatch(loadRuntimeOfFilmAction(runtime)));
};

export const fetchGenres = () => (dispatch) => {
  movieApi.getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};
