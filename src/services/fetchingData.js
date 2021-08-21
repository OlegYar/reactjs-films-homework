import {
  openModalAction, loadGenresAction, loadFilmsAction, loadMainFilmAction,
  changeCurrentPageAction, getLatestFilmIdAction,
} from '../modules/actions';
import {
  getMovies, getGenreMovies, getSearchResults, getMainMovie,
  getLatestMovieId, getGenreList, getVideo,
} from '.';

export const fetchVideo = (id) => (dispatch) => {
  getVideo(id).then((key) => dispatch(openModalAction(key)));
};

export const fetchFilms = (type, page) => (dispatch) => {
  getMovies(type, page).then((films) => {
    dispatch(loadFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchGenreFilms = (genre, page) => (dispatch) => {
  getGenreMovies(genre, page).then((films) => {
    dispatch(loadFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchSearchResults = (query, page) => (dispatch) => {
  getSearchResults(query, page).then((films) => {
    dispatch(loadFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchMainFilm = (id) => (dispatch) => {
  getMainMovie(id).then((movie) => dispatch(loadMainFilmAction(movie)));
};

export const fetchLatesFilmId = () => (dispatch) => {
  getLatestMovieId().then((id) => dispatch(getLatestFilmIdAction(id)));
};

export const fetchGenres = () => (dispatch) => {
  getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};
