import React, { Component } from 'react';
import MovieListItem from '../movieListItem/MovieListItem';
import TheMovieDbService from '../../services';
import styles from './MovieList.module.scss';

class MovieList extends Component {
  movieApi = new TheMovieDbService();

  constructor() {
    super();
    this.state = { films: null };
    this.updateMoviePage(1);
  }

  updateMoviePage(page) {
    this.movieApi.getTopRatedMovies(page).then((films) => {
      this.setState({
        films,
      });
    });
  }

  render() {
    const { films } = this.state;
    let movieCards;
    if (films) {
      movieCards = films.map((movie) => <li key={movie.id} className={styles.movieListItem}><MovieListItem movie={movie} genres={['Adventure', 'Drama', 'Family', 'Fantasy']} /></li>);
    }
    return (
      <div className={styles.movieListContainer}>
        <ul className={styles.movieList}>
          {movieCards}
        </ul>
      </div>
    );
  }
}

export default MovieList;
