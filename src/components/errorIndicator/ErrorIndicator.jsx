import React from 'react';
import styles from './ErrorIndicator.module.scss';

const ErrorIndicator = () => (
  <div className={styles.container}>
    <p className={styles.smile}><i className="far fa-sad-tear" /></p>
    <p className={styles.sorryText}>Sorry, something went wrong.</p>
  </div>
);

export default ErrorIndicator;
