const initialState = {
  films: [],
  genres: null,
};

const LOAD_TOPRATED_FILMS = 'LOAD_TOPRATED_FILMS';
const LOAD_GENRES = 'LOAD_GENRES';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOPRATED_FILMS:
      return { ...state, films: [...state.films, ...action.payload] };
    case LOAD_GENRES:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};

export const loadTopratedFilmsAction = (payload) => ({ type: LOAD_TOPRATED_FILMS, payload });
export const loadGenres = (payload) => ({ type: LOAD_GENRES, payload });
export default reducer;
