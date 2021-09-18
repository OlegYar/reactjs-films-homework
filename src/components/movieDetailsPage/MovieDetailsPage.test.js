import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import MovieDetailsPage from './MovieDetailsPage';

const movie = {
    id: 848278,
    title: "Jurassic Hunt",
    rating: 4.8,
    runtime: 83,
    backdropPath: "/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
    overview: "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
    genres: [{id: 28, name: "Action"}, {id: 878, name: "Science Fiction"}, {id: 53, name: "Thriller"}],
}
 
test('renders MovieDetailsPage component without AboutFilm', () => {
  const state = {
    mainFilm: [{
      isAboutFilmActive: false,
   }]
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieDetailsPage movie={movie} />, { store });
  expect(screen.queryByTestId('about')).toBeFalsy();
});

test("renders MovieDetailsPage component with AboutFilm", () => {
  const state = {
    mainFilm: [{
       isAboutFilmActive: true,
    }]
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieDetailsPage movie={movie} />, { store });
  expect(screen.getByTestId('about')).toBeTruthy();
});
