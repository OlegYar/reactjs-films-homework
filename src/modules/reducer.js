const initialState = {
  films: [],
  genres: null,
};

const LOAD_TRENDING_FILMS = 'LOAD_TRENDING_FILMS';
const LOAD_GENRES = 'LOAD_GENRES';
const SWITCH_ITEM_TO_INFO_MODE = 'SWITCH_ITEM_TO_INFO_MODE';
const SWITCH_ITEM_TO_MAIN_MODE = 'SWITCH_ITEM_TO_MAIN_MODE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRENDING_FILMS:
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

export const loadTrendingFilmsAction = (payload) => ({ type: LOAD_TRENDING_FILMS, payload });
export const loadGenresAction = (payload) => ({ type: LOAD_GENRES, payload });
export const switchItemToInfoModeAction = (payload) => ({
  type: SWITCH_ITEM_TO_INFO_MODE, payload,
});
export const switchItemToMainModeAction = (payload) => ({
  type: SWITCH_ITEM_TO_MAIN_MODE, payload,
});
export default reducer;
