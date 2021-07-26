const initialState = {
  films: [],
  searchFilms: [],
  isSearch: false,
  loadingFilms: true,
  searchValue: '',
  mainFilm: null,
  loadingMainFilm: true,
  genres: null,
  modalWindow: {
    isModalActive: false,
    key: null,
  },
};

const LOAD_TRENDING_FILMS = 'LOAD_TRENDING_FILMS';
const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const CLEAN_FILMS = 'CLEAN_FILMS';
const LOAD_SEARCH_RESULTS = 'LOAD_SEARCH_RESULTS';
const LOAD_MAIN_FILM = 'LOAD_MAIN_FILM';
const SWITCH_ABOUT_FILM = 'SWITCH_ABOUT_FILM';
const LOAD_GENRES = 'LOAD_GENRES';
const SWITCH_ITEM_TO_INFO_MODE = 'SWITCH_ITEM_TO_INFO_MODE';
const SWITCH_ITEM_TO_MAIN_MODE = 'SWITCH_ITEM_TO_MAIN_MODE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRENDING_FILMS:
      return {
        ...state,
        films: [...state.films, ...action.payload],
        loadingFilms: false,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case CLEAN_FILMS:
      return {
        ...state,
        films: [],
        loadingFilms: true,
      };
    case LOAD_SEARCH_RESULTS:
      return {
        ...state,
        searchFilms: [...action.payload],
        isSearch: true,
        searchValue: '',
      };
    case LOAD_MAIN_FILM:
      return {
        ...state,
        mainFilm: [{ ...action.payload, isAboutFilmActive: false }],
        loadingMainFilm: false,
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
    default:
      return state;
  }
};

export const loadTrendingFilmsAction = (payload) => ({ type: LOAD_TRENDING_FILMS, payload });
export const changeSearchValueAction = (payload) => ({ type: CHANGE_SEARCH_VALUE, payload });
export const cleanFilmsAction = () => ({ type: CLEAN_FILMS });
export const loadSearchResultsAction = (payload) => ({ type: LOAD_SEARCH_RESULTS, payload });
export const loadMainFilmAction = (payload) => ({ type: LOAD_MAIN_FILM, payload });
export const switchAboutFilm = () => ({ type: SWITCH_ABOUT_FILM });
export const loadGenresAction = (payload) => ({ type: LOAD_GENRES, payload });
export const switchItemToInfoModeAction = (payload) => ({
  type: SWITCH_ITEM_TO_INFO_MODE, payload,
});
export const switchItemToMainModeAction = (payload) => ({
  type: SWITCH_ITEM_TO_MAIN_MODE, payload,
});
export const openModalAction = (payload) => ({ type: OPEN_MODAL, payload });
export const closeModalAction = () => ({ type: CLOSE_MODAL });
export default reducer;
