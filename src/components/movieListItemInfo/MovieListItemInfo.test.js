import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import MovieListItemInfo from './MovieListItemInfo';

const movie = {
    id: 566525,
    title: "Shang-Chi and the Legend of the Ten Rings",
    rating: 7.9,
    backgroundImg: {
      background: 'url(https://image.tmdb.org/t/p/w300/4q2NNj4S5dG2RLF9CpXsej7yXl) no-repeat center top / cover',
    },
    genres: "Action, Science Fiction, Thriller",
    overview: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
}
 
test('renders MovieListItemInfo component', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(
    <MovieListItemInfo
      id={movie.id}
      title={movie.title}
      rating={movie.rating}
      backgroundImg={movie.backgroundImg}
      genres={movie.genres}
      overview={movie.overview}
    />,
    { store }
  );
  expect(screen.getByText('Shang-Chi and the Legend of the Ten Rings')).toBeTruthy();
  expect(screen.getByText('Action, Science Fiction, Thriller')).toBeTruthy();
  expect(screen.getByText('Watch Now')).toBeTruthy();
  expect(screen.getByText(/Shang-Chi must confront/)).toBeTruthy();
  expect(screen.getByText('7.9')).toBeTruthy();
});
