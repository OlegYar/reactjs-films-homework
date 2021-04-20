import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.module.scss';

const MovieInfo = ({ title, genreList, duration }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.list}>
      {genreList.map((item) => (
        <li className={styles.listItem}>{item}</li>
      ))}
      <li className={styles.listItem}>|</li>
      <li className={styles.listItem}>{duration}</li>
    </ul>
  </div>
);

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
};

export default MovieInfo;
