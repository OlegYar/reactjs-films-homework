import React from 'react';
import styles from './MovieTabs.module.scss';

const MovieTabs = () => (
  <div className={styles.movieTabsContainer}>
    <nav>
      <ul className={styles.movieTabs}>
        <li><a href="#1">Trending</a></li>
        <li><a href="#1">Top Rated</a></li>
        <li><a href="#1">Coming Soon</a></li>
      </ul>
    </nav>
  </div>
);

export default MovieTabs;
