import React from 'react';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';

import { assembleGenres } from '../helpers/index';
import LoadMoreButton from './LoadMoreButton';
import MoviesItemClass from './MoviesItemClass';
import './MoviesList.css';

const MoviesList = ({ movies, user, genres, title, dispatch, callback, loadMore }) => {
  if (movies.error) {
    return (
      <h2>{movies.error} <br />{movies.errorStatus}</h2>
    );
  }
  return (
    <div className="MoviesList">
      <Subheader className="PageHeader">{title}</Subheader>
      <div className="MoviesGrid">
        {movies.moviesList.map((movie) =>
          (<MoviesItemClass
            key={movie.id}
            movie={movie}
            genres={assembleGenres(movie, genres)}
            dispatch={dispatch}
            user={user}
          />),
        )
        }
      </div>
      <LoadMoreButton
        callback={callback}
        loadMore={loadMore}
        page={Number(movies.page)}
        totalPages={Number(movies.total_pages)}
        dispatch={dispatch}
      />
    </div>
  );
};

MoviesList.defaultProps = {
  callback: () => {},
  loadMore: () => {},
};

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  loadMore: PropTypes.func,
  callback: PropTypes.func,
};

export default MoviesList;
