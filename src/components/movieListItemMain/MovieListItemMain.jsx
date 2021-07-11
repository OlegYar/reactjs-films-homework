import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MovieListItemMain.module.scss';
import { switchItemToInfoMode } from '../../modules/reducer';

const MovieListItemMain = ({
  id, title, rating, background, genres,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.movieCard}>
      <div style={background} className={styles.movieCardCover}>
        <div className={styles.movieCardInfo}>
          <div className={styles.playIcon}>
            <i className="fas fa-play-circle play"> </i>
          </div>
          <p className={styles.playIconTitle}>Watch Now</p>
          <button onClick={() => dispatch(switchItemToInfoMode(id))} type="button" className={styles.button}>
            View Info
          </button>
        </div>
      </div>
      <div className={styles.movieCardMainInfo}>
        <div className={styles.movieCardMainInfoTitle}>
          <p className={styles.movieName}>{title}</p>
          <p className={styles.genres}>{genres}</p>
        </div>
        <div className={styles.movieCardMainInfoRating}>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </div>
  );
};

MovieListItemMain.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  background: PropTypes.objectOf(PropTypes.string).isRequired,
  genres: PropTypes.string.isRequired,
};

export default MovieListItemMain;