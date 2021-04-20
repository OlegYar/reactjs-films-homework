import React from 'react';
import Search from '../search';
import './MovieDetailsPage.scss';

const MovieDetailsPage = () => (
  <div className="wrapper">
    <div className="header">
      <span className="logo">FILMS</span>
      <Search />
    </div>
  </div>
);

export default MovieDetailsPage;
