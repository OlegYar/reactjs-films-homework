import React from 'react';
import { render } from '@testing-library/react';
import AboutFilm from './AboutFilm';

test('renders learn react link', () => {
  const { getByTestId } = render(<AboutFilm text="Some text..." />);
  const paragraphEl = getByTestId('about');
  expect(paragraphEl.textContent).toBe('Some text...');
});
