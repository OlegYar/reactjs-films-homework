import React from 'react';
import Search from '../Search';
import './header.scss';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="search-line">
          <h1>FILM</h1>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
