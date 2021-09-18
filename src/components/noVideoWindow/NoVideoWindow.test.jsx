import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import NoVideoWindow from './NoVideoWindow';
 
test('renders NoVideoWindow component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<NoVideoWindow />, { store });
 
  expect(screen.getByText('Sorry, there\'s no video')).toBeTruthy();
});
