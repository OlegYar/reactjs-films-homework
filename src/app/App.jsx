import React from 'react';
import { useSelector } from 'react-redux';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPage from '../components/movieDetailsPage';
import MovieList from '../components/movieList';
import './App.scss';

const App = () => {
  const isModalActive = useSelector((state) => state.modalWindow.isModalActive);
  return (
    <div>
      <MovieDetailsPage />
      <MovieList />
      { isModalActive ? <ModalWindow /> : null }
    </div>
  );
};

export default App;
