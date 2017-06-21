import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList';

class FavoriteMoviesPageContainer extends Component {
  renderNoFavoriteMovies() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>There is no favorite movies.</div>
    );
  }
  render() {
    const movies = {
      moviesList: this.props.user.favoriteMovies || [],
    };

    if (!this.props.user.isLoggedIn) {
      return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>You have no permission for access to this page.</div>
      );
    }

    if (!this.props.user.favoriteMovies.length) {
      return this.renderNoFavoriteMovies();
    }

    return (
      <MoviesList
        movies={movies}
        genres={this.props.genres}
        title="Favorite Movies"
      />
    );
  }
}

const mapStateToProps = state => ({ user: state.user, genres: state.genres });

FavoriteMoviesPageContainer.propsTypes = {
  user: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(FavoriteMoviesPageContainer);
