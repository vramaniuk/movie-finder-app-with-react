const initialState = {
  page: '',
  moviesList: [],
  total_pages: '',
  total_results: '',
};

const movies = (films = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_SUCCESS':
      return {
        page: action.payload.data.page,
        moviesList: [
          ...films.moviesList,
          ...action.payload.data.results,
        ],
        total_pages: action.payload.data.total_pages,
        total_results: action.payload.data.total_results,
      };
    case 'GET_MOVIES_FAIL':
      return {
        error: action.payload.error,
        errorStatus: action.payload.status,
      };
    case 'CLEAR_MOVIES':
      return { ...initialState };
    default:
      return films;
  }
};

export default movies;
