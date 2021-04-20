import React from 'react';
import Search from '../search';
import MovieInfo from '../movieInfo';
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
      </div>
    </div>
  </div>
);

export default MovieDetailsPage;
