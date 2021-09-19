import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import MovieListItem from './MovieListItem';

const movie = {
    isMain: true,
    id: 848278,
    title: 'Jurassic Hunt',
    rating: 4.7,
    posterPath: '/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
    genreIds: [28, 878, 53],
    overview: 'Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!',
}

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
 
test('renders MovieListItem component with main card', () => {
  const state = {};
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieListItem movie={movie} genres={genres} />, { store });
  expect(screen.queryByText(/Female adventurer Parker joins a crew/)).toBeFalsy();
});

test('renders MovieListItem component with info card', () => {
    const state = {};
    const store = createStore(reducer, state, applyMiddleware(thunk));
    render(<MovieListItem movie={{...movie, isMain: false}} genres={genres} />, { store });
    expect(screen.queryByText(/Female adventurer Parker joins a crew/)).toBeTruthy();
});
