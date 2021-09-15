import React from 'react';
import { render } from '../../utils/test-utils';
import Search from './Search';

test('render Search', () => {
  const { getByPlaceholderText, getByTestId } = render(<Search />);
  const searchEl = getByPlaceholderText('Search here...');
  const searchButtonEl = getByTestId('searchButton');
  expect(searchEl).toBeTruthy();
  expect(searchButtonEl.className).toBe('searchButton');
});
