import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
 
import Spinner from './Spinner';
 
test('renders Spinner component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<Spinner />, { store });
 
  expect(screen.getByText('LOADING')).toBeTruthy();
});
