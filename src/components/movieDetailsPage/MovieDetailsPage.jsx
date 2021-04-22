import React from 'react';
import Search from '../search';
import MovieInfo from '../movieInfo';
import Button from '../button';
import Stars from '../stars';
import './MovieDetailsPage.scss';
import AboutFilm from '../aboutFilm/AboutFilm';

const MovieDetailsPage = () => (
  <div className="wrapper">
    <div className="header">
      <span className="logo">FILMS</span>
      <Search />
    </div>
    <div className="details">
      <div className="film-info">
        <MovieInfo
          title="THE JUNGLE BOOK"
          genreList={['Adventure', 'Drama', 'Family', 'Fantasy']}
          duration="1h 46m"
        />
        <Stars rating={4.3} />
      </div>
      <div className="button-wrapper">
        <Button value="Watch Now" />
        <Button value="View Info" />
      </div>
    </div>
    <AboutFilm
      text="There are growing dangers in the wizarding world of 1926 New York.
      Something mysterious is leaving a path of destruction in the streets,
      threatening to expose the wizarding"
    />
  </div>
);

export default MovieDetailsPage;
