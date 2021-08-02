export default class TheMovieDbService {
    apiBase = 'https://api.themoviedb.org/3';

    async getResorce(url) {
      const res = await fetch(`${this.apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Couls not fetch ${url}, received ${res.status}`);
      }
      return res.json();
    }

    async getMovies(type, pageNumber) {
      const res = await this.getResorce(`/movie/${type}?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&page=${pageNumber}`);
      return res.results.map(this.transformMovies);
    }

    async getGenreMovies(genre, pageNumber) {
      const res = await this.getResorce(`/movie/popular?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&with_genres=${genre}&language=en-US&page=${pageNumber}`);
      return res.results.map(this.transformMovies);
    }

    async getSearchResults(query, pageNumber) {
      const res = await this.getResorce(`/search/movie?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`);
      return res.results.map(this.transformMovies);
    }

    async getMainMovie(id) {
      const res = await this.getResorce(`/movie/${id}?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US`);
      return this.transformMovies(res);
    }

    async getLatestMovieId() {
      const res = await this.getResorce('/movie/popular?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&page=1');
      return res.results[0].id;
    }

    async getGenreList() {
      const res = await this.getResorce('/genre/movie/list?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US');
      return res.genres;
    }

    async getVideo(id) {
      const res = await this.getResorce(`/movie/${id}/videos?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US`);
      if (res.results[0]) {
        return res.results[0].key;
      }
      return false;
    }

    transformMovies = (movie) => (
      {
        isMain: true,
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        runtime: movie.runtime,
        genreIds: movie.genre_ids,
        genres: movie.genres,
        overview: movie.overview,
      }
    )
}
