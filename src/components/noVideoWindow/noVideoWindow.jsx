import React from 'react';
import styles from './NoVideoWindow.module.scss';

const NoVideoWindow = () => (
  <div className={styles.noVideo}>
    <p className={styles.smile}><i className="far fa-sad-tear" /></p>
    <p className={styles.sorryText}>Sorry, there&apos;s no video</p>
  </div>
);

export default NoVideoWindow;
