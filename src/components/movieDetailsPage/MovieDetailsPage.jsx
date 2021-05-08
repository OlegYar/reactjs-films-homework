import React from 'react';
import Search from '../search/Search';
import MovieInfo from '../movieInfo/MovieInfo';
import Button from '../button/Button';
import Stars from '../stars/Stars';
import AboutFilm from '../aboutFilm/AboutFilm';
import styles from './MovieDetailsPage.module.scss';

const MovieDetailsPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <span data-testid="logo" className={styles.logo}>FILMS</span>
      <Search />
    </div>
    <div className={styles.details}>
      <div className={styles.filmInfo}>
        <MovieInfo
          title="THE JUNGLE BOOK"
          genreList={['Adventure', 'Drama', 'Family', 'Fantasy']}
          duration="1h 46m"
        />
        <Stars rating={4.3} />
      </div>
      <div className={styles.buttonWrapper}>
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
