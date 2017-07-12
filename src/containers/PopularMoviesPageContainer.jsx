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

  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        genres={this.props.genres}
        title="Popular Movies"
        dispatch={this.props.dispatch}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  genres: state.genres,
});

PopularMoviesPageContainer.propTypes = {
  movies: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PopularMoviesPageContainer);
