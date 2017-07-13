import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList';

class FavoriteMoviesPage extends Component {
  renderNoFavoriteMovies = () => (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>There is no favorite movies.</div>
  );


  render() {
    const { user, genres } = this.props;
    const movies = {
      moviesList: user.favoriteMovies || [],
    };

    if (!user.isLoggedIn) {
      return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>You have no permission for access to
          this
          page.</div>
      );
    }

    if (!user.favoriteMovies.length) {
      return this.renderNoFavoriteMovies();
    }

    return (
      <MoviesList
        movies={movies}
        genres={genres}
        title="Favorite Movies"
        dispatch={this.props.dispatch}
        user={this.props.user}
      />
    );
  }
}
FavoriteMoviesPage.propTypes = {
  user: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  genres: state.genres,
});

export default connect(mapStateToProps)(FavoriteMoviesPage);
