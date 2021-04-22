import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';

const Stars = ({ rating }) => {
  const starsArray = [];
  for (let i = 0; i < 5; i += 1) {
    const isFullStar = i < rating - 0.5 ? 'fas' : 'far';
    starsArray.push(<li className={styles.star}><i className={`${isFullStar} fa-star`}> </i></li>);
  }
  return (
    <div className={styles.filmRating}>
      <ul className={styles.stars}>
        {starsArray}
      </ul>
      <div className={styles.ratingContainer}>
        <p className={styles.rating}>{rating}</p>
      </div>
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
