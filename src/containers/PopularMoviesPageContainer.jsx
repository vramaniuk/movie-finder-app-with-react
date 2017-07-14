import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearMovies, getPopularMovies } from '../actions/moviesActions';
import MoviesList from '../components/MoviesList';

class PopularMoviesPageContainer extends Component {


  componentDidMount() {
    this.props.dispatch(getPopularMovies());
  }

  componentWillUnmount() {
    this.props.dispatch(clearMovies());
  }

  loadMore = (callback) => {
    const { page, total_pages } = this.props.movies;

    if (page < total_pages) { // eslint-disable-line camelcase
      const nextPage = page + 1;
      this.props.dispatch(callback(nextPage));
    }
  };

  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        genres={this.props.genres}
        title="Popular Movies"
        dispatch={this.props.dispatch}
        user={this.props.user}
        callback={getPopularMovies}
        loadMore={this.loadMore}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  genres: state.genres,
  user: state.user,
});

PopularMoviesPageContainer.propTypes = {
  movies: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PopularMoviesPageContainer);
