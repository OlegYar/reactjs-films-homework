import React from 'react';
import { render, screen } from '../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../modules/reducer';
import App from './App';

test('renders App component', () => {
  const state = {
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
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<App />, { store });
  expect(screen.getByText('Trending')).toBeTruthy();
  expect(screen.getByText('Top Rated')).toBeTruthy();
  expect(screen.getByText('Coming Soon')).toBeTruthy();
  expect(screen.getByText('Genre')).toBeTruthy();
});
