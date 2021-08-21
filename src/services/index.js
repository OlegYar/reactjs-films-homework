const apiBase = 'https://api.themoviedb.org/3';

const transformMovies = (movie) => (
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
);

async function getResorce(url) {
  const res = await fetch(`${apiBase}${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  return res.json();
}

async function getMovies(type, pageNumber) {
  const res = await getResorce(`/movie/${type}?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&page=${pageNumber}`);
  return res.results.map(transformMovies);
}

async function getGenreMovies(genre, pageNumber) {
  const res = await getResorce(`/movie/popular?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&with_genres=${genre}&language=en-US&page=${pageNumber}`);
  return res.results.map(transformMovies);
}

async function getSearchResults(query, pageNumber) {
  const res = await getResorce(`/search/movie?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`);
  return res.results.map(transformMovies);
}

async function getMainMovie(id) {
  const res = await getResorce(`/movie/${id}?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US`);
  return transformMovies(res);
}

async function getLatestMovieId() {
  const res = await getResorce('/movie/popular?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US&page=1');
  return res.results[0].id;
}

async function getGenreList() {
  const res = await getResorce('/genre/movie/list?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US');
  return res.genres;
}

async function getVideo(id) {
  const res = await getResorce(`/movie/${id}/videos?api_key=95ba99e0f191e9eabd8a1d0c164f0af3&language=en-US`);
  if (res.results[0]) {
    return res.results[0].key;
  }
  return false;
}

export {
  getMovies, getGenreMovies, getSearchResults, getMainMovie,
  getLatestMovieId, getGenreList, getVideo,
};
