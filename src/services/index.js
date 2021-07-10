export default class TheMovieDbService {
    apiBase = 'https://api.themoviedb.org/3';

    async getResorce(url) {
      const res = await fetch(`${this.apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Couls not fetch ${url}, received ${res.status}`);
      }
      return res.json();
    }

    async getTopRatedMovies(pageNumber) {
      const res = await this.getResorce(`/movie/popular?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&page=${pageNumber}`);
      return res.results.map(this.transformMovies);
    }

    async getGenreList() {
      const res = await this.getResorce('/genre/movie/list?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US');
      return res.genres;
    }

    transformMovies = (movie) => (
      {
        isMain: true,
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average,
        posterPath: movie.poster_path,
        genreIds: movie.genre_ids,
        overview: movie.overview,
      }
    )
}
