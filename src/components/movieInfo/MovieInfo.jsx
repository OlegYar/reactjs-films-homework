import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.module.scss';
import getTimeFromMinutes from '../../utils/getTimeFromMinutes';

const MovieInfo = ({
  title, genres, duration,
}) => (
  <div className={styles.wrapper}>
    <h2 data-testid="titleFilm" className={styles.title}>
      {title}
    </h2>
    <div className={styles.aboutFilm}>
      <ul className={styles.list}>
        {genres.map((item) => (
          <li
            key={item.id}
            data-testid="genre"
            className={styles.listItem}
          >
            {item.name}
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

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
  duration: PropTypes.number,
};

MovieInfo.defaultProps = {
  duration: null,
};

export default MovieInfo;
