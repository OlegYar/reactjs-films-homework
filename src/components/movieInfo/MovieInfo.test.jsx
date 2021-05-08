import React from 'react';
import { render } from '@testing-library/react';
import MovieInfo from './MovieInfo';

test('render MovieInfo', () => {
  const { getByTestId, getAllByTestId } = render(<MovieInfo
    title="THE JUNGLE BOOK"
    genreList={['Adventure', 'Drama', 'Family', 'Fantasy']}
    duration="1h 46m"
  />);
  const titleFilmEl = getByTestId('titleFilm');
  const spliterEl = getByTestId('spliter');
  const durationEl = getByTestId('duration');
  const genreEl = getAllByTestId('genre');
  expect(titleFilmEl.textContent).toBe('THE JUNGLE BOOK');
  expect(genreEl.length).toBe(4);
  expect(spliterEl.textContent).toBe('|');
  expect(durationEl.textContent).toBe('1h 46m');
});
