import React from 'react';
import { render, screen } from '../utils/test-utils';
import App from './App';

test('renders App component', async () => {
  render(<App />);
  expect(screen.getByText('Trending')).toBeTruthy();
  expect(screen.getByText('Top Rated')).toBeTruthy();
  expect(screen.getByText('Coming Soon')).toBeTruthy();
  expect(screen.getByText('Genre')).toBeTruthy();
});
