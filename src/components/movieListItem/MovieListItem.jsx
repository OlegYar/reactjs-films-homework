import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListItem.module.scss';

const MovieListItem = (
  {
    title, genres, rating, backdropPath,
  },
) => {
  const movieCover = {
    background: `url(https://image.tmdb.org/t/p/w300/${backdropPath}) no-repeat center top / cover`,
  };
  const genreStr = genres.join(', ');
  return (
    <div className={styles.movieCard}>
      <div style={movieCover} className={styles.movieCardCover}>
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
          <p className={styles.movieName}>{title}</p>
          <p className={styles.genres}>{genreStr}</p>
        </div>
        <div className={styles.movieCardMainInfoRating}>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </div>
  );
};

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  backdropPath: PropTypes.string.isRequired,
};

export default MovieListItem;
