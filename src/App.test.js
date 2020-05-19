import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('With React Testing Library', () => {
  const initialState = { dataSource: {
    moviesResult: {
      Search: [
        { Title: 'The Brand New Testament',
          Year: '2015',
          imdbID: 'tt3792960',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMjM3OTAzMzYzNV5BMl5BanBnXkFtZTgwNTQ4MzU0MDI@._V1_SX300.jpg' },
        { Title: 'Our Brand Is Crisis',
          Year: '2015',
          imdbID: 'tt1018765',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTg5MDUwMDQwM15BMl5BanBnXkFtZTgwNTczMjU3NjE@._V1_SX300.jpg' },
        { Title: 'Brand Upon the Brain! A Remembrance in 12 Chapters',
          Year: '2006',
          imdbID: 'tt0443455',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMmI3MTg0NGUtMDc4NS00ZTU3LWFlYjEtZTZhMzc2MDA5ODA0XkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg' },
        { Title: 'A Brand New Life',
          Year: '2009',
          imdbID: 'tt1287875',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTUzMDIxNTczNF5BMl5BanBnXkFtZTcwNDc2MzUwMw@@._V1_SX300.jpg' },
        { Title: 'Russell Brand: Messiah Complex',
          Year: '2013',
          imdbID: 'tt3397430',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMjE2MjUzMTQzN15BMl5BanBnXkFtZTgwNzc5MTAxMzE@._V1_SX300.jpg' },
        { Title: 'Russell Brand: Re: Birth',
          Year: '2018',
          imdbID: 'tt9349942',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BZjIyZTM3YWItNzY3Ni00ODg4LWFhOWMtODM5ZWQ0MjhjYjQ4XkEyXkFqcGdeQXVyMTY5OTQzNzY@._V1_SX300.jpg' },
        { Title: 'Brand X with Russell Brand',
          Year: '2012–2013',
          imdbID: 'tt2282445',
          Type: 'series',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTY3MDg4ODk5OV5BMl5BanBnXkFtZTcwNzAxNDgwOA@@._V1_SX300.jpg' },
        { Title: 'Brand: A Second Coming',
          Year: '2015',
          imdbID: 'tt3798628',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ0NDI1MzE2OF5BMl5BanBnXkFtZTgwMTc0MTc4NjE@._V1_SX300.jpg' },
        { Title: 'Civil Brand',
          Year: '2002',
          imdbID: 'tt0326806',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTkyNDI4NTgyM15BMl5BanBnXkFtZTcwMTcwNDAwMQ@@._V1_SX300.jpg' },
        { Title: 'Our Brand Is Crisis',
          Year: '2005',
          imdbID: 'tt0492714',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4NTI0NTQ1Nl5BMl5BanBnXkFtZTcwMjYxNDQzMQ@@._V1_SX300.jpg' }],
      totalResults: '213',
      Response: 'True',
    },
    movie: {
      Title: 'The Brand New Testament',
      Year: '2015',
      Rated: 'Not Rated',
      Released: '01 Sep 2015',
      Runtime: '114 min',
      Genre: 'Comedy, Fantasy',
      Director: 'Jaco Van Dormael',
      Writer: 'Thomas Gunzig, Jaco Van Dormael',
      Actors: 'Pili Groyne, Benoît Poelvoorde, Catherine Deneuve, François Damiens',
      Plot: 'Did you know that God is alive and lives in Brussels with his daughter?',
      Language: 'French, German',
      Country: 'Belgium, France, Luxembourg',
      Awards: 'Nominated for 1 Golden Globe. Another 14 wins & 23 nominations.',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjM3OTAzMzYzNV5BMl5BanBnXkFtZTgwNTQ4MzU0MDI@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.1/10' }, { Source: 'Rotten Tomatoes', Value: '82%' }, { Source: 'Metacritic', Value: '70/100' }],
      Metascore: '70',
      imdbRating: '7.1',
      imdbVotes: '27,913',
      imdbID: 'tt3792960',
      Type: 'movie',
      DVD: 'N/A',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
  },
  };
  const mockStore = configureStore();

  it('should render correctly', () => {
    const store = mockStore(initialState);
    const { getByText } = render(<Provider store={store}><App /></Provider>);

    expect(getByText('A Brand New Life')).toBeInTheDocument();
  });
});
