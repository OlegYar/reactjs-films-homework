import React from 'react';
import PropTypes from 'prop-types';
import MovieListItemInfo from '../movieListItemInfo';
import MovieListItemMain from '../movieListItemMain/MovieListItemMain';

const MovieListItem = ({ movie, genres }) => {
  const {
    id, title, rating, posterPath, genreIds, overview, isMain,
  } = movie;
  const movieCover = {
    background: `url(https://image.tmdb.org/t/p/w300/${posterPath}) no-repeat center top / cover`,
  };
  let genreStr = '';
  if (genres) {
    genreStr = genreIds.map((itemId) => genres.find((g) => g.id === itemId).name).join(', ');
  }
  return (isMain) ? (
    <MovieListItemMain
      id={id}
      title={title}
      rating={rating}
      backgroundImg={movieCover}
      genres={genreStr}
    />
  ) : (
    <MovieListItemInfo
      id={id}
      title={title}
      rating={rating}
      backgroundImg={movieCover}
      genres={genreStr}
      overview={overview}
    />
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    isMain: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
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
