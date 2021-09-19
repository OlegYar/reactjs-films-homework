import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import MovieList from './MovieList';

const films = [
  { 
    isMain: true,
    id: 848238,
    title: 'Jurassic Hunt',
    rating: 4.7,
    posterPath: '/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
    genreIds: [28, 878, 53],
    overview: 'Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!',
  },
  { 
    isMain: true,
    id: 848278,
    title: 'Jurassic Hunt',
    rating: 4.7,
    posterPath: '/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
    genreIds: [28, 878, 53],
    overview: 'Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!',
  },
  { 
    isMain: true,
    id: 848218,
    title: 'Jurassic Hunt',
    rating: 4.7,
    posterPath: '/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
    genreIds: [28, 878, 53],
    overview: 'Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!',
  },
];

const genres = [
    {id: 28, name: "Action"},
    {id: 12, name: "Adventure"},
    {id: 16, name: "Animation"},
    {id: 35, name: "Comedy"},
    {id: 80, name: "Crime"},
    {id: 99, name: "Documentary"},
    {id: 18, name: "Drama"},
    {id: 10751, name: "Family"},
    {id: 14, name: "Fantasy"},
    {id: 36, name: "History"},
    {id: 27, name: "Horror"},
    {id: 10402, name: "Music"},
    {id: 9648, name: "Mystery"},
    {id: 10749, name: "Romance"},
    {id: 878, name: "Science Fiction"},
    {id: 10770, name: "TV Movie"},
    {id: 53, name: "Thriller"},
    {id: 10752, name: "War"},
    {id: 37, name: "Western"},
];
 
test('renders MovieList component with films', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieList films={films} genres={genres} />, { store });
  expect(screen.getAllByText('Jurassic Hunt').length).toBe(3);
});

test('renders MovieList component without films', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieList films={[]} genres={genres} />, { store });
  expect(screen.queryAllByText('Jurassic Hunt').length).toBe(0);
});

test('check isFilmLoaded in MovieList with true', () => {
  const state = {
    loadingFilms: true,
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieList films={[]} genres={genres} />, { store });
  expect(screen.queryByText('LOADING')).toBeTruthy();
});

test('check isFilmLoaded in MovieList with false', () => {
  const state = {
    loadingFilms: false,
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieList films={[]} genres={genres} />, { store });
  expect(screen.queryByText('LOADING')).toBeFalsy();
});
