import React from 'react';
import PropTypes from 'prop-types';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';

import { getPopularMovies } from '../actions/moviesActions';
import './LoadMoreButton.css';

const LoadMoreButton = ({ page, totalPages, dispatch }) => {
  const loadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      dispatch(getPopularMovies(nextPage));
    }
  };
  if (page < totalPages) {
    return (<RaisedButton
      className="LoadMoreButton"
      icon={<AddCircleOutline />}
      fullWidth
      label="Load more"
      labelPosition="before"
      onClick={loadMore}
      primary
    />);
  }

  return <div className="EndOfMoviesList">End of Movies list.</div>;
};

LoadMoreButton.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default LoadMoreButton;
