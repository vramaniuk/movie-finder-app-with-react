import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addMovieToFavorite, removeMovieFromFavorite } from '../actions/movieActions';

import MoviesItem from '../components/MoviesItem';


class MoviesItemContainer extends Component {


  isFavoriteMovie = () => {
    const { user, movie } = this.props;
    if (user.isLoggedIn) {
      return !!user.favoriteMovies.find((favoriteMovie) => favoriteMovie.id === movie.id);
    }
    return false;
  };

  addToFavorite = () => {
    const { movie, user } = this.props;
    this.props.dispatch(addMovieToFavorite(movie.id, user.userId));
  };

  removeFromFavorite = () => {
    const { movie, user } = this.props;
    this.props.dispatch(removeMovieFromFavorite(movie.id, user.userId));
  };

  render() {
    const { movie, genres, user } = this.props;
    return (
      <MoviesItem
        movie={movie}
        genres={genres}
        logged={user.isLoggedIn}
        isFavorite={this.isFavoriteMovie()}
        addToFavorite={this.addToFavorite}
        removeFromFavorite={this.removeFromFavorite}
      />
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });

MoviesItemContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(MoviesItemContainer);
