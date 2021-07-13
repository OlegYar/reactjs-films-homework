import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPage from '../components/movieDetailsPage';
import MovieList from '../components/movieList';
import { fetchMainFilm } from '../services/fetchingData';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const isModalActive = useSelector((state) => state.modalWindow.isModalActive);
  const mainMovie = useSelector((state) => state.mainFilm);
  const genres = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(fetchMainFilm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      { mainMovie ? <MovieDetailsPage movie={mainMovie[0]} genres={genres} /> : null }
      <MovieList />
      { isModalActive ? <ModalWindow /> : null }
    </div>
  );
};

export default App;
