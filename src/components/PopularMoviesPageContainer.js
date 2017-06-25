import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearMovies, getPopularMovies } from '../actions/moviesActions';

import MoviesList from './MoviesList';

class PopularMoviesPageContainer extends Component {


  componentDidMount() {
    this.props.dispatch(getPopularMovies());
  }

  componentWillUnmount() {
    this.props.dispatch(clearMovies());
  }

  loadMore = (callback) => {
    const { page, total_pages } = this.props.movies;

    if (page < total_pages) {
      const nextPage = page + 1;
      this.props.dispatch(callback(nextPage));
    }
  };

  render() {
    return (
      <MoviesList
        callback={getPopularMovies}
        loadMore={this.loadMore}
        movies={this.props.movies}
        genres={this.props.genres}
        title="Popular Movies"
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies,
  genres: state.genres,
  ownProps,
});
PopularMoviesPageContainer.propTypes = {
  movies: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(PopularMoviesPageContainer);
