import React from 'react';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';

import { assembleGenres } from '../helpers/index';
import LoadMoreButton from './LoadMoreButton';
import MoviesItemClass from './MoviesItemClass';
import './MoviesList.css';

const MoviesList = ({ movies, user, genres, title, dispatch }) => {
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
        page={Number(movies.page)}
        totalPages={Number(movies.total_pages)}
        dispatch={dispatch}
      />
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default MoviesList;
