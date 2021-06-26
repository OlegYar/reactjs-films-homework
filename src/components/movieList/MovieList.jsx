import React, { Component } from 'react';
import MovieListItem from '../movieListItem/MovieListItem';
import TheMovieDbService from '../../services';
import styles from './MovieList.module.scss';

class MovieList extends Component {
  movieApi = new TheMovieDbService();

  constructor() {
    super();
    this.state = { films: null };
    this.updateMoviePage();
  }

  updateMoviePage() {
    this.movieApi.getTopRatedMovies(2).then((response) => {
      this.setState({
        films: response.results,
      });
    });
  }

  render() {
    const { films } = this.state;
    let movieCards;
    if (films) {
      movieCards = films.map((movie) => <li key={movie.id} className={styles.movieListItem}><MovieListItem title={movie.title} genres={['Adventure', 'Drama', 'Family', 'Fantasy']} rating={movie.vote_average} backdropPath={movie.poster_path} /></li>);
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
