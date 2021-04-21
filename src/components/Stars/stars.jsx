import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';

const Stars = ({ rating }) => (
  <div className={styles.filmRating}>
    <ul className={styles.stars}>
      <li className={styles.star}><i className="fas fa-star"> </i></li>
      <li className={styles.star}><i className="fas fa-star"> </i></li>
      <li className={styles.star}><i className="fas fa-star"> </i></li>
      <li className={styles.star}><i className="fas fa-star"> </i></li>
      <li className={styles.star}><i className="fas fa-star"> </i></li>
    </ul>
    <div className={styles.ratingContainer}>
      <p className={styles.rating}>{rating}</p>
    </div>
  </div>
);

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
