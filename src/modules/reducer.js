const initialState = {
  films: [],
  genres: null,
};

const LOAD_TOPRATED_FILMS = 'LOAD_TOPRATED_FILMS';
const LOAD_GENRES = 'LOAD_GENRES';
const SWITCH_ITEM_TO_INFO_MODE = 'SWITCH_ITEM_TO_INFO_MODE';
const SWITCH_ITEM_TO_MAIN_MODE = 'SWITCH_ITEM_TO_MAIN_MODE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOPRATED_FILMS:
      return { ...state, films: [...state.films, ...action.payload] };
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
    default:
      return state;
  }
};

export const loadTopratedFilmsAction = (payload) => ({ type: LOAD_TOPRATED_FILMS, payload });
export const loadGenres = (payload) => ({ type: LOAD_GENRES, payload });
export const switchItemToInfoMode = (payload) => ({ type: SWITCH_ITEM_TO_INFO_MODE, payload });
export const switchItemToMainMode = (payload) => ({ type: SWITCH_ITEM_TO_MAIN_MODE, payload });
export default reducer;
