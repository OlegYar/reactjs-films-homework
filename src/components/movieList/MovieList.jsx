import React from 'react';
import MovieListItem from '../movieListItem/MovieListItem';
import styles from './MovieList.module.scss';

const MovieList = () => (
  <div className={styles.movieListContainer}>
    <ul className={styles.movieList}>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
      <li className={styles.movieListItem}><MovieListItem title="DOCTOR STRANGE" genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={4.3} /></li>
    </ul>
  </div>
);

export default MovieList;
