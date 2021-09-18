import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import Search from './Search';

test('render Search', () => {
  const state = {
    searchValue: '',
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<Search />, { store });
  expect(screen.getByPlaceholderText('Search here...')).toBeTruthy();
  expect(screen.getByTestId('searchButton')).toBeTruthy();
});
