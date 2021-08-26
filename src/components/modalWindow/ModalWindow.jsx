import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ModalWindow.module.scss';
import { closeModalAction } from '../../modules/actions';
import { keyOfModalWindowSelector } from '../../modules/selectors';
import VideoWindow from '../videoWindow';
import NoVideoWindow from '../noVideoWindow';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const key = useSelector(keyOfModalWindowSelector);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
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
          {key ? <VideoWindow videoKey={key} /> : <NoVideoWindow />}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
