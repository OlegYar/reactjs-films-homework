import React from 'react';
import styles from './NoResults.module.scss';

const NoResults = () => (
  <div className={styles.noResults}>
    <p className={styles.smile}><i className="far fa-sad-tear" /></p>
    <p className={styles.sorryText}>There&apos;s no results</p>
  </div>
);

export default NoResults;
