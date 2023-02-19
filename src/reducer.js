const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'FETCH_MOVIES') {
    return {
      ...state,
      loading: false,
      movies: action.payload,
      error: { display: false, msg: '' },
    };
  }
  if (action.type === 'MOVIE_NOT_FOUND') {
    return {
      ...state,
      loading: false,
      error: { display: true, msg: action.payload },
    };
  }

  if (action.type === 'FETCH_SINGLE_MOVIE') {
    return { ...state, loading: false, singleMovie: action.payload };
  }
  if (action.type === 'LOADING_FALSE') {
    return { ...state, loading: false };
  }

  if (action.type === 'CHANGE_QUERY') {
    return { ...state, query: action.payload };
  }

  throw new Error('there is no such action type');
};

export default reducer;
