import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import { fetchMainFilm } from '../../services/fetchingData';
import { mainFilmSelector, loadingMainFilmSelector } from '../../modules/selectors';
import MovieDetailsPage from '../movieDetailsPage';

const MovieDetailsPageContainer = ({ latestFilmId }) => {
  const dispatch = useDispatch();
  const mainFilm = useSelector(mainFilmSelector);
  const isLoaded = useSelector(loadingMainFilmSelector);
  useEffect(() => {
    dispatch(fetchMainFilm(latestFilmId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      { isLoaded ? <Spinner /> : <MovieDetailsPage movie={mainFilm[0]} /> }
    </>
  );
};

MovieDetailsPageContainer.propTypes = {
  latestFilmId: PropTypes.number.isRequired,
};

export default MovieDetailsPageContainer;
