import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListItemInfo.module.scss';

const MovieListItemInfo = ({
  title, rating, background, genres, overview,
}) => (
  <div style={background} className={styles.movieCard}>
    <div className={styles.movieCardCover}>
      <button className={styles.exitButton} type="button">
        <i className="fas fa-times" />
      </button>
      <div className={styles.movieCardMainInfo}>
        <div className={styles.movieCardMainInfoTitle}>
          <p className={styles.movieName}>{title}</p>
          <p className={styles.genres}>{genres}</p>
        </div>
        <div className={styles.movieCardMainInfoRating}>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
      <p className={styles.aboutFilm}>
        {overview}
      </p>
      <button type="button" className={styles.button}>
        Watch Now
      </button>
    </div>
  </div>
);

MovieListItemInfo.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  background: PropTypes.objectOf(PropTypes.string).isRequired,
  genres: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieListItemInfo;
