import React from 'react';
import Search from '../search';
import MovieInfo from '../movieInfo';
import Button from '../button';
import Stars from '../stars';
import './MovieDetailsPage.scss';

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
        <Stars rating={4.8} />
      </div>
      <div className="button-wrapper">
        <Button value="Watch Now" />
        <Button value="View Info" />
      </div>
    </div>
  </div>
);

export default MovieDetailsPage;
