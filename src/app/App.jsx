import React from 'react';
import { useSelector } from 'react-redux';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPageContainer from '../components/movieDetailsPage';
import Spinner from '../components/spinner/Spinner';
import MovieList from '../components/movieList';
import './App.scss';

const App = () => {
  const isModalActive = useSelector((state) => state.modalWindow.isModalActive);
  const isLoaded = useSelector((state) => state.loadingFilms);
  return (
    <div>
      {isLoaded ? <Spinner /> : <MovieDetailsPageContainer />}
      <MovieList />
      { isModalActive ? <ModalWindow /> : null }
    </div>
  );
};

export default App;
