import axios from 'axios';

const create = (baseURL) => {
  const fetchMovies = (searchInput) => axios.get(`${baseURL}${searchInput}`);
  const fetchMovie = (searchInput) => axios.get(`${baseURL}${searchInput}`);
  return {
    // a list of the API functions
    fetchMovies,
    fetchMovie,
  };
};

export default create;
