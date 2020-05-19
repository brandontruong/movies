import Types from './Types';

const fetchMovies = (searchInput) => ({ type: Types.FETCH_MOVIES, searchInput });
const fetchMoviesSuccessful = (dataSource) => ({ type: Types.FETCH_MOVIES_SUCCESSFUL, dataSource });

const fetchMovie = (searchInput) => ({ type: Types.FETCH_MOVIE, searchInput });
const fetchMovieSuccessful = (dataSource) => ({ type: Types.FETCH_MOVIE_SUCCESSFUL, dataSource });

export {
  fetchMovies,
  fetchMoviesSuccessful,
  fetchMovie,
  fetchMovieSuccessful,
};
