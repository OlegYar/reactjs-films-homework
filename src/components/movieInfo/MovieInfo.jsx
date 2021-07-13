import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.module.scss';

const MovieInfo = ({
  title, genreList, genreIds, duration,
}) => {
  function getTimeFromMinutes(min) {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}h ${minutes}m`;
  }
  return (
    <div className={styles.wrapper}>
      <h2 data-testid="titleFilm" className={styles.title}>
        {title}
      </h2>
      <div className={styles.aboutFilm}>
        <ul className={styles.list}>
          {genreList.map((item, index) => (
            <li
              key={genreIds[index]}
              data-testid="genre"
              className={styles.listItem}
            >
              {item}
            </li>
          ))}
        </ul>
        <span data-testid="spliter" className={styles.splitter}>
          |
        </span>
        <p data-testid="duration" className={styles.duration}>
          {getTimeFromMinutes(duration)}
        </p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  duration: PropTypes.number,
};

MovieInfo.defaultProps = {
  duration: null,
};

export default MovieInfo;
