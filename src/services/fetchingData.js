import TheMovieDbService from '.';
import {
  openModalAction, loadGenresAction, loadTrendingFilmsAction, loadMainFilmAction,
} from '../modules/reducer';

const movieApi = new TheMovieDbService();

export const fetchVideo = (id) => (dispatch) => {
  movieApi.getVideo(id).then((key) => dispatch(openModalAction(key)));
};

export const fetchTrendingFilms = (page) => (dispatch) => {
  movieApi.getTrendingMovies(page).then((films) => dispatch(loadTrendingFilmsAction(films)));
};

export const fetchMainFilm = (id) => (dispatch) => {
  movieApi.getMainMovie(id).then((movie) => dispatch(loadMainFilmAction(movie)));
};

export const fetchGenres = () => (dispatch) => {
  movieApi.getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};
