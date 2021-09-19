import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import NoResults from './NoResults';
 
test('renders NoResults component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<NoResults />, { store });
 
  expect(screen.getByText('There\'s no results')).toBeTruthy();
});
