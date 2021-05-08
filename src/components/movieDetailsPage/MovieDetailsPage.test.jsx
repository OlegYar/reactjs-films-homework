import React from 'react';
import { render } from '@testing-library/react';
import MovieDetailsPage from './MovieDetailsPage';

test('render MovieDetailsPage', () => {
  const { getByTestId } = render(<MovieDetailsPage />);
  const logoEl = getByTestId('logo');
  expect(logoEl.textContent).toBe('FILMS');
});
