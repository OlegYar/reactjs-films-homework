import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import ModalWindow from './ModalWindow';
 
test('renders ModalWindow component without key', () => {
  const state = {
    modalWindow: {
      isModalActive: true,
      key: null,
    },
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<ModalWindow />, { store });
  expect(screen.getByText('Sorry, there\'s no video')).toBeTruthy();
  expect(screen.queryByTitle('YouTube video player')).toBeFalsy();
});

test('renders ModalWindow component with key', () => {
    const state = {
      modalWindow: {
        isModalActive: true,
        key: '8g18jFHCLXk',
      },
    };
    const store = createStore(reducer, state, applyMiddleware(thunk));
    render(<ModalWindow />, { store });
    expect(screen.queryByText('Sorry, there\'s no video')).toBeFalsy();
    expect(screen.getByTitle('YouTube video player')).toBeTruthy();
});
