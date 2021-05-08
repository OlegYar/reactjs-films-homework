import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.module.scss';

const MovieInfo = ({ title, genreList, duration }) => (
  <div className={styles.wrapper}>
    <h2 data-testid="titleFilm" className={styles.title}>{title}</h2>
    <div className={styles.aboutFilm}>
      <ul className={styles.list}>
        {genreList.map((item) => (
          <li data-testid="genre" className={styles.listItem}>{item}</li>
        ))}
      </ul>
      <span data-testid="spliter" className={styles.splitter}>|</span>
      <p data-testid="duration" className={styles.duration}>{duration}</p>
    </div>
  </div>
);

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
};

export default MovieInfo;
