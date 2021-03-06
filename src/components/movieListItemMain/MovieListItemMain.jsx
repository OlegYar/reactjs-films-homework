import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MovieListItemMain.module.scss';
import { switchItemToInfoModeAction } from '../../modules/actions';
import { fetchMainFilm, fetchVideo } from '../../services/fetchingData';

const MovieListItemMain = ({
  id, title, rating, backgroundImg, genres,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.movieCard}>
      <div style={backgroundImg} className={styles.movieCardCover}>
        <div className={styles.movieCardInfo}>
          <button onClick={() => dispatch(fetchVideo(id))} type="button" className={styles.playIcon}>
            <i className="fas fa-play-circle play"> </i>
          </button>
          <p className={styles.playIconTitle}>Watch Now</p>
          <button onClick={() => dispatch(switchItemToInfoModeAction(id))} type="button" className={styles.button}>
            View Info
          </button>
        </div>
      </div>
      <div className={styles.movieCardMainInfo}>
        <div className={styles.movieCardMainInfoTitle}>
          <p className={styles.movieName}>
            <a href="#movieDetails" type="button" onClick={() => dispatch(fetchMainFilm(id))}>{title}</a>
          </p>
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
  backgroundImg: PropTypes.objectOf(PropTypes.string).isRequired,
  genres: PropTypes.string.isRequired,
};

export default MovieListItemMain;
