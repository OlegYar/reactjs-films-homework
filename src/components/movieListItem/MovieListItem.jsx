import React from 'react';
import styles from './MovieListItem.module.scss';

const MovieListItem = () => (
  <div className={styles.movieCard}>
    <div className={styles.movieCardCover}>
      <div className={styles.movieCardInfo}>
        <div className={styles.playIcon}>
          <i className="fas fa-play-circle play"> </i>
        </div>
        <p className={styles.playIconTitle}>Watch Now</p>
        <button type="button" className={styles.button}>
          View Info
        </button>
      </div>
    </div>
    <div className={styles.movieCardMainInfo}>
      <div className={styles.movieCardMainInfoTitle}>
        <p className={styles.movieName}>DOCTOR STRANGE</p>
        <ul className={styles.genreList}>
          <li className={styles.genreListItem}>f</li>
          <li className={styles.genreListItem}>g</li>
          <li className={styles.genreListItem}>h</li>
        </ul>
      </div>
      <div className={styles.movieCardMainInfoRating}>
        <p className={styles.rating}>4.3</p>
      </div>
    </div>
  </div>
);

export default MovieListItem;
