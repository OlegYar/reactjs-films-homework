import React from 'react';
import { render, screen } from '../../utils/test-utils';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../modules/reducer';
import MovieDetailsPageContainer from './MovieDetailsPageContainer';

const movie = [{
    isAboutFilmActive: false,
    id: 848278,
    title: "Jurassic Hunt",
    rating: 4.8,
    runtime: 83,
    backdropPath: "/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
    overview: "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
    genres: [{id: 28, name: "Action"}, {id: 878, name: "Science Fiction"}, {id: 53, name: "Thriller"}],
}];
 
test('renders MovieDetailsPageContainer component loading', () => {
  const state = {
    mainFilm: movie,
    loadingMainFilm: true,
  };
  const store = createStore(reducer, state, applyMiddleware(thunk));
  render(<MovieDetailsPageContainer latestFilmId={848278} />, { store });
  expect(screen.getByText('LOADING')).toBeTruthy();
  expect(screen.queryByText('FILMS')).toBeFalsy();
});

test('renders MovieDetailsPageContainer component loaded', () => {
    const state = {
      mainFilm: movie,
      loadingMainFilm: false,
    };
    const store = createStore(reducer, state, applyMiddleware(thunk));
    render(<MovieDetailsPageContainer latestFilmId={848278} />, { store });
    expect(screen.getByText('FILMS')).toBeTruthy();
    expect(screen.queryByText('LOADING')).toBeFalsy();
});
