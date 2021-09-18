import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import ErrorIndicator from './ErrorIndicator';
 
test('renders ErrorIndicator component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<ErrorIndicator />, { store });
  expect(screen.getByTestId('smile-icon')).toBeTruthy();
  expect(screen.getByText('Sorry, something went wrong.')).toBeTruthy();
});
