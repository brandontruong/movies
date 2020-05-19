import { shape, string } from 'prop-types';

const movieType = shape({
  Title: string.isRequired,
  Year: string.isRequired,
  imdbID: string.isRequired,
  Type: string.isRequired,
  Poster: string.isRequired,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Ratings: shape({}),
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string,
});

export default movieType;
