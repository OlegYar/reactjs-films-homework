import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../search/Search';
import MovieInfo from '../movieInfo/MovieInfo';
import Stars from '../stars/Stars';
import AboutFilm from '../aboutFilm/AboutFilm';
import styles from './MovieDetailsPage.module.scss';
import { switchAboutFilm } from '../../modules/reducer';
import { fetchVideo } from '../../services/fetchingData';

const MovieDetailsPage = ({ movie }) => {
  const dispatch = useDispatch();
  const isAboutFilmActive = useSelector((state) => state.mainFilm[0].isAboutFilmActive);
  const {
    id, title, rating, runtime, backdropPath, overview, genres,
  } = movie;
  const movieBackground = {
    background: `url(https://image.tmdb.org/t/p/original/${backdropPath}) no-repeat center top / cover`,
  };
  return (
    <div id="movieDetails" style={movieBackground} className={styles.wrapper}>
      <div className={styles.header}>
        <span data-testid="logo" className={styles.logo}>
          FILMS
        </span>
        <Search />
      </div>
      <div className={styles.details}>
        <div className={styles.filmInfo}>
          <MovieInfo
            title={title}
            genres={genres}
            duration={runtime}
          />
          <Stars rating={rating} />
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={() => dispatch(fetchVideo(id))} type="button" className={styles.button}>
            Watch Now
          </button>
          <button onClick={() => dispatch(switchAboutFilm())} type="button" className={styles.button}>
            View Info
          </button>
        </div>
      </div>
      { isAboutFilmActive ? <AboutFilm text={overview} /> : null }
    </div>
  );
};

MovieDetailsPage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number,
    backdropPath: PropTypes.string,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetailsPage;
