export default class TheMovieDbService {
    apiBase = 'https://api.themoviedb.org/3';

    async getResorce(url) {
      const res = await fetch(`${this.apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Couls not fetch ${url}, received ${res.status}`);
      }
      return res.json();
    }

    getTopRatedMovies(pageNumber) {
      return this.getResorce(`/movie/popular?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&page=${pageNumber}`);
    }
}
