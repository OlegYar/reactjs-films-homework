import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <p className={styles.logo}>FILMS</p>
    <p className={styles.copyright}>Copyright © 2021 FILMS. Oleg Yarotskiy</p>
  </div>
);

export default Footer;
