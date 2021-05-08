import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutFilm.module.scss';

const AboutFilm = ({ text }) => (
  <div className={styles.container}>
    <p data-testid="about" className={styles.description}>
      {text}
    </p>
  </div>
);

AboutFilm.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AboutFilm;
