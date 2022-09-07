import { createReducer } from 'reduxsauce';
import Types from '../actions/Types';

export const INITIAL_STATE = {
  movie: { Title: '', Genre: '', Plot: '', Language: '', Director: '', Actors: '', Runtime: '', Poster: '' },
  moviesResult: {},
};

export const fetchMoviesSuccessful = (state, action) => ({ ...state, moviesResult: action.dataSource });

export const fetchMovieSuccessful = (state, action) => ({ ...state, movie: action.dataSource });

// map our types to our handlers
export const ACTION_HANDLERS = {
  [Types.FETCH_MOVIES_SUCCESSFUL]: fetchMoviesSuccessful,
  [Types.FETCH_MOVIE_SUCCESSFUL]: fetchMovieSuccessful,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
