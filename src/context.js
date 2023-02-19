import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const apiKey = process.env.REACT_APP_KEY;
const url = `https://www.omdbapi.com/?apikey=${apiKey}`;

const initialState = {
  loading: false,
  movies: [],
  singleMovie: {},
  error: { display: false, msg: '' },
  query: 'batman',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const resp = await fetch(`${url}&s=${state.query}`);
      const data = await resp.json();

      if (data.Response === 'True') {
        dispatch({ type: 'FETCH_MOVIES', payload: data.Search });
      } else {
        dispatch({ type: 'MOVIE_NOT_FOUND', payload: data.Error });
      }
    } catch (error) {
      dispatch({ type: 'LOADING_FALSE' });
      console.log(error);
    }
  };

  const fetchSingleMovie = async (id) => {
    dispatch({ type: 'LOADING' });
    try {
      const resp = await fetch(`${url}&i=${id}`);
      const data = await resp.json();
      if (data) {
        dispatch({ type: 'FETCH_SINGLE_MOVIE', payload: data });
      } else {
        dispatch({ type: 'MOVIE_NOT_FOUND', payload: data.Error });
      }
    } catch (error) {
      dispatch({ type: 'LOADING_FALSE' });
      console.log(error);
    }
  };

  const changeQuery = (e) => {
    const newValue = e.target.value;
    dispatch({ type: 'CHANGE_QUERY', payload: newValue });
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, fetchSingleMovie, changeQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
