import {
  openModalAction, loadGenresAction, loadFilmsAction, loadMainFilmAction,
  changeCurrentPageAction, getLatestFilmIdAction,
} from '../modules/actions';
import {
  getMovies, getGenreMovies, getSearchResults, getMainMovie,
  getGenreList, getVideo,
} from '.';

export const fetchVideo = (id) => async (dispatch) => {
  const key = await getVideo(id);
  dispatch(openModalAction(key));
};

export const fetchFilms = (type, page) => async (dispatch) => {
  const films = await getMovies(type, page);
  dispatch(loadFilmsAction(films));
  if (type === 'popular') dispatch(getLatestFilmIdAction(films[0].id));
  dispatch(changeCurrentPageAction());
};

export const fetchGenreFilms = (genre, page) => async (dispatch) => {
  const films = await getGenreMovies(genre, page);
  dispatch(loadFilmsAction(films));
  dispatch(changeCurrentPageAction());
};

export const fetchSearchResults = (query, page) => async (dispatch) => {
  const films = await getSearchResults(query, page);
  dispatch(loadFilmsAction(films));
  dispatch(changeCurrentPageAction());
};

export const fetchMainFilm = (id) => async (dispatch) => {
  const movie = await getMainMovie(id);
  dispatch(loadMainFilmAction(movie));
};

export const fetchGenres = () => async (dispatch) => {
  const genres = await getGenreList();
  dispatch(loadGenresAction(genres));
};
