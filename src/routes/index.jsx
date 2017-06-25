import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import PopularMoviesPageContainer from '../components/PopularMoviesPageContainer';
import SearchMoviesPageContainer from '../components/SearchMoviesPageContainer';
import FavoriteMoviesPage from '../components/FavoriteMoviesPage';
import MovieDetailsPageContainer from '../components/MovieDetailsPageContainer';
import Page404 from '../components/Page404';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PopularMoviesPageContainer} />
    <Route path="search" component={SearchMoviesPageContainer} />
    <Route path="favorites" component={FavoriteMoviesPage} />
    <Route path="movie/:id" component={MovieDetailsPageContainer} />
    <Route path="*" component={Page404} />
  </Route>
);

export default routes;
