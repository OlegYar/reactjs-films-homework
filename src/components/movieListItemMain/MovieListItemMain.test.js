import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import MovieListItemMain from './MovieListItemMain';

const movie = {
    id: 566525,
    title: "Shang-Chi and the Legend of the Ten Rings",
    rating: 7.9,
    backgroundImg: {
      background: 'url(https://image.tmdb.org/t/p/w300/4q2NNj4S5dG2RLF9CpXsej7yXl) no-repeat center top / cover',
    },
    genres: "Action, Science Fiction, Thriller",
}
 
test('renders MovieListItemMain component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(
    <MovieListItemMain
      id={movie.id}
      title={movie.title}
      rating={movie.rating}
      backgroundImg={movie.backgroundImg}
      genres={movie.genres}
    />,
    { store }
  );
  expect(screen.getByText('Shang-Chi and the Legend of the Ten Rings')).toBeTruthy();
  expect(screen.getByText('Action, Science Fiction, Thriller')).toBeTruthy();
  expect(screen.getByText('Watch Now')).toBeTruthy();
  expect(screen.getByText('View Info')).toBeTruthy();
  expect(screen.getByText('7.9')).toBeTruthy();
});
