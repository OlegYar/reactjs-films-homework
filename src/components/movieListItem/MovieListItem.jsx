import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListItem.module.scss';

const MovieListItem = ({ movie, genres }) => {
  const {
    title, rating, posterPath, genreIds,
  } = movie;
  const movieCover = {
    background: `url(https://image.tmdb.org/t/p/w300/${posterPath}) no-repeat center top / cover`,
  };
  let genreStr = '';
  if (genres) {
    genreStr = genreIds.map((id) => genres.find((g) => g.id === id).name).join(', ');
  }
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
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    posterPath: PropTypes.string,
    genreIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

MovieListItem.defaultProps = {
  genres: null,
};

export default MovieListItem;
