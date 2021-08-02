import TheMovieDbService from '.';
import {
  openModalAction, loadGenresAction, loadFilmsAction, loadMainFilmAction,
  changeCurrentPageAction, getLatestFilmIdAction,
} from '../modules/reducer';

const movieApi = new TheMovieDbService();

export const fetchVideo = (id) => (dispatch) => {
  movieApi.getVideo(id).then((key) => dispatch(openModalAction(key)));
};

export const fetchFilms = (type, page) => (dispatch) => {
  movieApi.getMovies(type, page).then((films) => {
    dispatch(loadFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchGenreFilms = (genre, page) => (dispatch) => {
  movieApi.getGenreMovies(genre, page).then((films) => {
    dispatch(loadFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchSearchResults = (query, page) => (dispatch) => {
  movieApi.getSearchResults(query, page).then((films) => {
    dispatch(loadFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchMainFilm = (id) => (dispatch) => {
  movieApi.getMainMovie(id).then((movie) => dispatch(loadMainFilmAction(movie)));
};

export const fetchLatesFilmId = () => (dispatch) => {
  movieApi.getLatestMovieId().then((id) => dispatch(getLatestFilmIdAction(id)));
};

export const fetchGenres = () => (dispatch) => {
  movieApi.getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};
