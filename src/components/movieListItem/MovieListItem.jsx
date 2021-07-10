import React from 'react';
import PropTypes from 'prop-types';
import MovieListItemInfo from '../movieListItemInfo';
import MovieListItemMain from '../movieListItemMain/MovieListItemMain';

const MovieListItem = ({ movie, genres }) => {
  const {
    title, rating, posterPath, genreIds, overview, isMain,
  } = movie;
  const movieCover = {
    background: `url(https://image.tmdb.org/t/p/w300/${posterPath}) no-repeat center top / cover`,
  };
  let genreStr = '';
  if (genres) {
    genreStr = genreIds.map((id) => genres.find((g) => g.id === id).name).join(', ');
  }
  return (isMain) ? (
    <MovieListItemMain
      title={title}
      rating={rating}
      background={movieCover}
      genres={genreStr}
    />
  ) : (
    <MovieListItemInfo
      title={title}
      rating={rating}
      background={movieCover}
      genres={genreStr}
      overview={overview}
    />
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    isMain: PropTypes.bool.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number,
    posterPath: PropTypes.string,
    genreIds: PropTypes.arrayOf(PropTypes.number),
    overview: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

MovieListItem.defaultProps = {
  genres: null,
};

export default MovieListItem;
