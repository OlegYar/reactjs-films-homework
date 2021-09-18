import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import VideoWindow from './VideoWindow';
 
test('renders VideoWindow component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<VideoWindow videoKey='c31KJTzt5YY' />, { store });
 
  expect(screen.getByTitle('YouTube video player')).toBeTruthy();
});
