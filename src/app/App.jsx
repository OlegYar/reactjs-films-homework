import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPageContainer from '../components/movieDetailsPage';
import Spinner from '../components/spinner/Spinner';
import MovieList from '../components/movieList';
import { fetchTrendingFilms, fetchGenres } from '../services/fetchingData';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const isModalActive = useSelector((state) => state.modalWindow.isModalActive);
  const isLoaded = useSelector((state) => state.loadingFilms);
  const films = useSelector((state) => state.films);
  const genres = useSelector((state) => state.genres);
  const searchResults = useSelector((state) => state.searchFilms);
  const noResults = (
    <div className={styles.noResults}>
      <p className={styles.smile}><i className="far fa-sad-tear" /></p>
      <p className={styles.sorryText}>There&apos;s no results</p>
    </div>
  );
  const searchResultsContent = searchResults[0] ? (
    <MovieList films={searchResults} genres={genres} />
  ) : (
    noResults
  );
  const isSearch = useSelector((state) => state.isSearch);
  useEffect(() => {
    dispatch(fetchTrendingFilms(1));
    dispatch(fetchGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {isLoaded ? <Spinner /> : <MovieDetailsPageContainer />}
      {isSearch ? searchResultsContent : <MovieList films={films} genres={genres} />}
      {isModalActive ? <ModalWindow /> : null}
    </div>
  );
};

export default App;
