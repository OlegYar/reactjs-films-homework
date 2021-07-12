import TheMovieDbService from '.';
import { openModalAction, loadGenresAction, loadTrendingFilmsAction } from '../modules/reducer';

const movieApi = new TheMovieDbService();

export const fetchVideo = (id) => (dispatch) => {
  movieApi.getVideo(id).then((key) => dispatch(openModalAction(key)));
};

export const fetchTrendingFilms = (page) => (dispatch) => {
  movieApi.getTrendingMovies(page).then((films) => dispatch(loadTrendingFilmsAction(films)));
};

export const fetchGenres = () => (dispatch) => {
  movieApi.getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};
