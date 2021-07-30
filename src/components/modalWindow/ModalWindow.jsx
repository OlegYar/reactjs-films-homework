import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ModalWindow.module.scss';
import { closeModalAction } from '../../modules/reducer';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const key = useSelector((state) => state.modalWindow.key);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  const video = (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
  const noVideo = (
    <div className={styles.noVideo}>
      <p className={styles.smile}><i className="far fa-sad-tear" /></p>
      <p className={styles.sorryText}>Sorry, there&apos;s no video</p>
    </div>
  );
  return (
    <div
      role="button"
      tabIndex="0"
      className={styles.modalOverlay}
      onClick={() => { dispatch(closeModalAction()); }}
      onKeyDown={() => { dispatch(closeModalAction()); }}
    >
      <div
        role="button"
        tabIndex="0"
        className={styles.modalWindow}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => { dispatch(closeModalAction()); }}
      >
        <button onClick={() => { dispatch(closeModalAction()); }} className={styles.exitButton} type="button">
          <i className="fas fa-times" />
        </button>
        <div className={styles.modalBody}>
          {key ? video : noVideo}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
