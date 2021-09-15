import {
  LOAD_FILMS, CLEAN_FILMS, CHANGE_SEARCH_VALUE, SWITCH_LOADING_FILMS_TO_TRUE, CHANGE_CURRENT_PAGE,
  LOAD_MAIN_FILM, GET_LATEST_FILM_ID, SWITCH_ABOUT_FILM, LOAD_GENRES, SWITCH_ITEM_TO_INFO_MODE,
  SWITCH_ITEM_TO_MAIN_MODE, OPEN_MODAL, CLOSE_MODAL, SWITCH_TAB,
} from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_FILMS:
      return {
        ...state,
        films: [...state.films, ...action.payload],
        loadingFilms: false,
      };
    case CLEAN_FILMS:
      return {
        ...state,
        films: [],
        currentPage: 1,
        loadingFilms: true,
      };
    case SWITCH_LOADING_FILMS_TO_TRUE:
      return {
        ...state,
        loadingFilms: true,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case LOAD_MAIN_FILM:
      return {
        ...state,
        mainFilm: [{ ...action.payload, isAboutFilmActive: false }],
        loadingMainFilm: false,
      };
    case GET_LATEST_FILM_ID:
      return {
        ...state,
        latestFilmId: action.payload,
      };
    case SWITCH_ABOUT_FILM:
      return {
        ...state,
        mainFilm: [{
          ...state.mainFilm[0], isAboutFilmActive: !state.mainFilm[0].isAboutFilmActive,
        }],
      };
    case LOAD_GENRES:
      return { ...state, genres: action.payload };
    case SWITCH_ITEM_TO_INFO_MODE: {
      const movieId = action.payload;
      const movieIndx = state.films.findIndex((item) => (item.id === movieId));
      const movie = state.films[movieIndx];
      const newMovie = {
        ...movie,
        isMain: false,
      };
      return {
        ...state,
        films: [...state.films.slice(0, movieIndx), newMovie, ...state.films.slice(movieIndx + 1)],
      };
    }
    case SWITCH_ITEM_TO_MAIN_MODE: {
      const movieId = action.payload;
      const movieIndx = state.films.findIndex((item) => (item.id === movieId));
      const movie = state.films[movieIndx];
      const newMovie = {
        ...movie,
        isMain: true,
      };
      return {
        ...state,
        films: [...state.films.slice(0, movieIndx), newMovie, ...state.films.slice(movieIndx + 1)],
      };
    }
    case OPEN_MODAL:
      return { ...state, modalWindow: { isModalActive: true, key: action.payload } };
    case CLOSE_MODAL:
      return { ...state, modalWindow: { isModalActive: false, key: null } };
    case SWITCH_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
