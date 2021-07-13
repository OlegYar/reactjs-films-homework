import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../search/Search';
import MovieInfo from '../movieInfo/MovieInfo';
import Stars from '../stars/Stars';
import AboutFilm from '../aboutFilm/AboutFilm';
import styles from './MovieDetailsPage.module.scss';
import { switchAboutFilm } from '../../modules/reducer';
import { fetchVideo, fetchRuntimeOfFilm } from '../../services/fetchingData';

const MovieDetailsPage = ({ movie, genres }) => {
  const dispatch = useDispatch();
  const isAboutFilmActive = useSelector((state) => state.mainFilm[0].isAboutFilmActive);
  const {
    id, title, rating, posterPath, overview, genreIds,
  } = movie;
  const runtime = useSelector((state) => state.runtimeFilm);
  const movieBackground = {
    background: `url(https://image.tmdb.org/t/p/original/${posterPath}) no-repeat center top / contain`,
  };
  let genreArr = '';
  if (genres) {
    genreArr = genreIds.map((itemId) => genres.find((g) => g.id === itemId).name);
  }
  useEffect(() => {
    dispatch(fetchRuntimeOfFilm(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div style={movieBackground} className={styles.wrapper}>
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
            genreList={genreArr}
            genreIds={genreIds}
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
    posterPath: PropTypes.string,
    genreIds: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

MovieDetailsPage.defaultProps = {
  genres: null,
};

export default MovieDetailsPage;
