import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import ModalWindow from '../components/modalWindow/ModalWindow';
import MovieDetailsPageContainer from '../components/movieDetailsPageContainer';
import Spinner from '../components/spinner/Spinner';
import { switchLoadingFilmsToTrueAction } from '../modules/actions';
import './App.scss';
import MovieTabs from '../components/movieTabs/MovieTabs';
import MovieListContainer from '../components/movieListContainer/MovieListContainer';
import SearchResults from '../components/searchResults/SearchResults';
import MovieGenreList from '../components/movieGenreList/MovieGenreList';
import Footer from '../components/footer/Footer';
import { isModalActiveSelector, latestFilmIdSelector } from '../modules/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isModalActive = useSelector(isModalActiveSelector);
  const latestFilmId = useSelector(latestFilmIdSelector);
  let scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight - (
        e.target.documentElement.scrollTop + window.innerHeight
      ) < 100
    ) {
      dispatch(switchLoadingFilmsToTrueAction());
    }
  };
  scrollHandler = debounce(scrollHandler, 250);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      {!latestFilmId ? <Spinner /> : <MovieDetailsPageContainer latestFilmId={latestFilmId} />}
      <MovieTabs />
      <Route path="/" render={() => <MovieListContainer listType="popular" />} exact />
      <Route path="/top_rated" render={() => <MovieListContainer listType="top_rated" />} />
      <Route path="/upcoming" render={() => <MovieListContainer listType="upcoming" />} />
      <Route
        path="/search/:value"
        render={({ match }) => {
          const { value } = match.params;
          return <SearchResults value={value} />;
        }}
      />
      <Route
        path="/genres/:genre"
        render={({ match }) => {
          const { genre } = match.params;
          return <MovieGenreList genre={genre} />;
        }}
      />
      <Footer />
      {isModalActive ? <ModalWindow /> : null}
    </Router>
  );
};

export default App;
