import React from 'react';
import { connect } from 'react-redux';

import FavoriteMoviesPage from '../components/FavoriteMoviesPage'

const mapStateToProps = (state) => ({ user: state.user, genres: state.genres });

export default connect(mapStateToProps)(FavoriteMoviesPage);
