import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';

const initialState = {
  films: [],
  currentPage: 1,
  loadingFilms: true,
  searchValue: '',
  mainFilm: null,
  latestFilmId: null,
  loadingMainFilm: true,
  genres: null,
  modalWindow: {
    isModalActive: false,
    key: null,
  },
  activeTab: 1,
};

const store = createStore(
  reducer,
  sessionStorage['redux-store'] ? JSON.parse(sessionStorage['redux-store']) : initialState,
  applyMiddleware(thunk),
);

store.subscribe(() => {
  sessionStorage['redux-store'] = JSON.stringify(store.getState());
});

export default store;
