import React from 'react';
import Search from '../search';
import './MovieDetailsPage.scss';

const MovieDetailsPage = () => (
  <header>
    <div className="wrapper">
      <div className="search-line">
        <h1>FILM</h1>
        <Search />
      </div>
    </div>
  </header>
);

export default MovieDetailsPage;
