import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import styles from './MovieTabs.module.scss';
import { switchTabAction } from '../../modules/actions';
import { genresSelector, activeTabSelector } from '../../modules/selectors';

const MovieTabs = ({ history }) => {
  const dispatch = useDispatch();
  const genres = useSelector(genresSelector);
  const activeTab = useSelector(activeTabSelector);
  const activeStyle = {
    borderBottom: '3px solid #0aaee4',
    fontWeight: 'bold',
  };
  const handleClick = (number) => {
    dispatch(switchTabAction(number));
  };
  const tabs = [
    { path: '/', title: 'Trending' },
    { path: '/top_rated', title: 'Top Rated' },
    { path: '/upcoming', title: 'Coming Soon' },
  ];
  return (
    <div className={styles.movieTabsContainer}>
      <nav>
        <ul className={styles.movieTabs}>
          {tabs.map((tab, index) => (
            <li style={activeTab === index + 1 ? activeStyle : null}>
              <Link onClick={() => handleClick(index + 1)} to={tab.path}>{tab.title}</Link>
            </li>
          ))}
        </ul>
        <div style={activeTab === 4 ? activeStyle : null} className={styles.selectContainer}>
          <select
            className={styles.select}
            onChange={(e) => {
              const genre = e.target.value;
              const genreId = genres.find((el) => el.name === genre).id;
              handleClick(4);
              history.push(`/genres/${genreId}`);
            }}
          >
            <option hidden>Genre</option>
            { genres ? genres.map((genre) => <option key={genre.id}>{genre.name}</option>) : null}
          </select>
        </div>
      </nav>
    </div>
  );
};

MovieTabs.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
};

export default withRouter(MovieTabs);
