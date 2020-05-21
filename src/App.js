import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import styled from 'styled-components';

import Search from './components/Search';
import Details from './components/Details';

import * as DataSourceActions from './actions/DataSourceActions';

const Container = styled.div`
  margin: 1em;
  @media (min-width: 1024px), { 
    display: flex;
    border: solid grey 1px;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const { moviesResult, movie } = useSelector((state) => state.dataSource || { moviesResult: {}, movie: {} });
  const [loadingMovies, setLoadingMovies] = useState(false);

  const [loadingMovieDetails, setLoadingMovieDetails] = useState(false);
  useEffect(() => {
    setLoadingMovies(false);
  }, [moviesResult]);

  useEffect(() => {
    setLoadingMovieDetails(false);
  }, [movie]);

  const movieSelected = ({ imdbID }) => {
    dispatch(DataSourceActions.fetchMovie(`&i=${imdbID}`));
    setLoadingMovieDetails(true);
  };

  const realSearch = (searchText, pageNumber) => {
    if (!searchText) return;
    dispatch(DataSourceActions.fetchMovies(`&s=${searchText}&page=${pageNumber}`));
    setLoadingMovies(true);
  };

  const doSearch = debounce(realSearch, 500);
  const { Title, Genre, Plot, Language, Director, Actors, Runtime, Poster } = movie;
  return (
    <Container>
      <Search moviesResult={moviesResult} movieSelected={movieSelected} doSearch={doSearch} loading={loadingMovies} />
      <Details
        title={Title}
        genre={Genre}
        plot={Plot}
        language={Language}
        director={Director}
        Actors={Actors}
        duration={Runtime}
        poster={Poster}
        loading={loadingMovieDetails}
      />
    </Container>
  );
};

export default App;
