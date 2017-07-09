import React from 'react';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';

import { assembleGenres } from '../helpers/index';
import LoadMoreButton from './LoadMoreButton';
import MoviesItemContainer from '../containers/MoviesItemContainer';
import './MoviesList.css';

const MoviesList = ({ callback, movies, loadMore, genres, title }) => {
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
          (<MoviesItemContainer
            key={movie.id}
            movie={movie}
            genres={assembleGenres(movie, genres)}
          />),
        )
        }
      </div>
      <LoadMoreButton
        callback={callback}
        page={Number(movies.page)}
        totalPages={Number(movies.total_pages)}
        loadMore={loadMore}
      />
    </div>
  );
};

MoviesList.defaultProps = {
  callback: () => {
  },
  loadMore: () => {
  },
};

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loadMore: PropTypes.func,
  callback: PropTypes.func,
};

export default MoviesList;
