const initialState = {
  isLoaded: false,
  recommendedMovies: [],
};

const movie = (film = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_SUCCESS':
      return { ...film, ...action.payload.data, isLoaded: true };
    case 'GET_MOVIE_FAIL':
      return {
        error: action.payload.response.data.status_message,
      };
    case 'CLEAR_MOVIE':
      return { ...initialState };
    case 'GET_RECOMMENDED_MOVIE_SUCCESS':
      return {
        ...film,
        recommendedMovies: [
          ...action.payload.data.results,
        ],
      };
    case 'GET_RECOMMENDED_MOVIE_FAIL':
      return {
        ...film,
        recommendedMovies: {
          error: action.payload,
        },
      };
    default:
      return film;
  }
};

export default movie;
