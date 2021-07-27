import TheMovieDbService from '.';
import {
  openModalAction, loadGenresAction, loadTrendingFilmsAction, loadMainFilmAction,
  loadSearchResultsAction, changeCurrentPageAction,
} from '../modules/reducer';

const movieApi = new TheMovieDbService();

export const fetchVideo = (id) => (dispatch) => {
  movieApi.getVideo(id).then((key) => dispatch(openModalAction(key)));
};

export const fetchTrendingFilms = (page) => (dispatch) => {
  movieApi.getTrendingMovies(page).then((films) => {
    dispatch(loadTrendingFilmsAction(films));
    dispatch(changeCurrentPageAction());
  });
};

export const fetchSearchResults = (query, page) => (dispatch) => {
  movieApi.getSearchResults(query, page).then((films) => dispatch(loadSearchResultsAction(films)));
};

export const fetchMainFilm = (id) => (dispatch) => {
  movieApi.getMainMovie(id).then((movie) => dispatch(loadMainFilmAction(movie)));
};

export const fetchGenres = () => (dispatch) => {
  movieApi.getGenreList().then((genres) => dispatch(loadGenresAction(genres)));
};
