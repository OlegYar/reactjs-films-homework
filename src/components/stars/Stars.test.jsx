import React from 'react';
import { render } from '@testing-library/react';
import Stars from './Stars';

test('render Stars', () => {
  const { getByTestId, getAllByTestId } = render(<Stars rating={4.3} />);
  const starsEl = getAllByTestId('star');
  const ratingEl = getByTestId('rating');
  expect(starsEl.length).toBe(10);
  expect(ratingEl.textContent).toBe('4.3');
});
