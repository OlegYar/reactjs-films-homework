import React from 'react';
import { render } from '@testing-library/react';
import MovieInfo from './MovieInfo';

test('render MovieInfo', () => {
  const { getByTestId, getAllByTestId } = render(<MovieInfo
    title="THE JUNGLE BOOK"
    genres={[
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 21,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Fantasy',
      },
    ]}
    duration={140}
  />);
  const titleFilmEl = getByTestId('titleFilm');
  const spliterEl = getByTestId('spliter');
  const durationEl = getByTestId('duration');
  const genreEl = getAllByTestId('genre');
  expect(titleFilmEl.textContent).toBe('THE JUNGLE BOOK');
  expect(genreEl.length).toBe(3);
  expect(spliterEl.textContent).toBe('|');
  expect(durationEl.textContent).toBe('2h 20m');
});
