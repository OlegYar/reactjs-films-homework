import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieTabs.module.scss';

const MovieTabs = () => (
  <div className={styles.movieTabsContainer}>
    <nav>
      <ul className={styles.movieTabs}>
        <li><Link to="/">Trending</Link></li>
        <li><Link to="/top_rated">Top Rated</Link></li>
        <li><Link to="/upcoming">Coming Soon</Link></li>
      </ul>
    </nav>
  </div>
);

export default MovieTabs;
