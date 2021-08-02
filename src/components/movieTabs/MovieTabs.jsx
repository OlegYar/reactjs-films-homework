import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import styles from './MovieTabs.module.scss';
import { switchTabAction } from '../../modules/reducer';

const MovieTabs = ({ history }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const activeTab = useSelector((state) => state.activeTab);
  const activeStyle = {
    borderBottom: '3px solid #0aaee4',
    fontWeight: 'bold',
  };
  const handleClick = (number) => {
    dispatch(switchTabAction(number));
  };
  return (
    <div className={styles.movieTabsContainer}>
      <nav>
        <ul className={styles.movieTabs}>
          <li style={activeTab === 1 ? activeStyle : null}><Link onClick={() => handleClick(1)} to="/">Trending</Link></li>
          <li style={activeTab === 2 ? activeStyle : null}><Link onClick={() => handleClick(2)} to="/top_rated">Top Rated</Link></li>
          <li style={activeTab === 3 ? activeStyle : null}><Link onClick={() => handleClick(3)} to="/upcoming">Coming Soon</Link></li>
          <li style={activeTab === 4 ? activeStyle : null} className={styles.selectContainer}>
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
          </li>
        </ul>
      </nav>
    </div>
  );
};

MovieTabs.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
};

export default withRouter(MovieTabs);
