import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPageContainer from '../components/movieDetailsPage';
import Spinner from '../components/spinner/Spinner';
import MovieList from '../components/movieList';
import { fetchTrendingFilms, fetchGenres } from '../services/fetchingData';
import { switchLoadingFilmsToTrueAction } from '../modules/reducer';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const isModalActive = useSelector((state) => state.modalWindow.isModalActive);
  const isLoading = useSelector((state) => state.loadingFilms);
  const films = useSelector((state) => state.films);
  const currentPage = useSelector((state) => state.currentPage);
  const genres = useSelector((state) => state.genres);
  const searchResults = useSelector((state) => state.searchFilms);
  const noResults = (
    <div className={styles.noResults}>
      <p className={styles.smile}><i className="far fa-sad-tear" /></p>
      <p className={styles.sorryText}>There&apos;s no results</p>
    </div>
  );
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight - (
        e.target.documentElement.scrollTop + window.innerHeight
      ) < 100
    ) {
      dispatch(switchLoadingFilmsToTrueAction());
    }
  };
  const searchResultsContent = searchResults[0] ? (
    <MovieList films={searchResults} genres={genres} />
  ) : (
    noResults
  );
  const isSearch = useSelector((state) => state.isSearch);
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchTrendingFilms(currentPage));
    }
    dispatch(fetchGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {isLoading ? <Spinner /> : <MovieDetailsPageContainer />}
      {isSearch ? searchResultsContent : <MovieList films={films} genres={genres} />}
      {isModalActive ? <ModalWindow /> : null}
    </div>
  );
};

export default App;
