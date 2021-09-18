import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import Footer from './Footer';
 
test('renders Footer component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<Footer />, { store });
 
  expect(screen.getByText('FILMS')).toBeTruthy();
  expect(screen.getByText('Copyright © 2021 FILMS. Oleg Yarotskiy')).toBeTruthy();
});
