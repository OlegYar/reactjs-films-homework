import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPageContainer from '../components/movieDetailsPage';
import Spinner from '../components/spinner/Spinner';
// import MovieList from '../components/movieList/MovieList';
import { switchLoadingFilmsToTrueAction } from '../modules/reducer';
import { fetchLatesFilmId } from '../services/fetchingData';
import './App.scss';
import MovieTabs from '../components/movieTabs/MovieTabs';
import MovieListContainer from '../components/movieListContainer/MovieListContainer';

const App = () => {
  const dispatch = useDispatch();
  const isModalActive = useSelector((state) => state.modalWindow.isModalActive);
  // const isLoading = useSelector((state) => state.loadingFilms);
  const latestFilmId = useSelector((state) => state.latestFilmId);
  /* const genres = useSelector((state) => state.genres);
  const searchResults = useSelector((state) => state.searchFilms); */
  /* const noResults = (
    <div className={styles.noResults}>
      <p className={styles.smile}><i className="far fa-sad-tear" /></p>
      <p className={styles.sorryText}>There&apos;s no results</p>
    </div>
  ); */
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight - (
        e.target.documentElement.scrollTop + window.innerHeight
      ) < 100
    ) {
      dispatch(switchLoadingFilmsToTrueAction());
    }
  };
  /* const searchResultsContent = searchResults[0] ? (
    <MovieList films={searchResults} genres={genres} />
  ) : (
    noResults
  ); */
  // const isSearch = useSelector((state) => state.isSearch);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    dispatch(fetchLatesFilmId());
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Router>
        {!latestFilmId ? <Spinner /> : <MovieDetailsPageContainer latestFilmId={latestFilmId} />}
        <MovieTabs />
        {/* {isSearch ? searchResultsContent : <MovieListContainer listType="popular" />} */}
        <Route path="/" render={() => <MovieListContainer listType="popular" />} exact />
        <Route path="/top_rated" render={() => <MovieListContainer listType="top_rated" />} />
        <Route path="/upcoming" render={() => <MovieListContainer listType="upcoming" />} />
        {isModalActive ? <ModalWindow /> : null}
      </Router>
    </div>
  );
};

export default App;
