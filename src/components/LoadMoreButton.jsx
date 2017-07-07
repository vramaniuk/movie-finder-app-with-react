import React from 'react';
import PropTypes from 'prop-types';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';

import { searchMovies } from '../actions/moviesActions';
import './LoadMoreButton.css';


const LoadMoreButton = ({ page, totalPages, loadMore }) => {
  const loadMoreBinded = loadMore.bind(null, searchMovies);
  if (page < totalPages) {
    return (<RaisedButton
      className="LoadMoreButton"
      icon={<AddCircleOutline />}
      fullWidth
      label="Load more"
      labelPosition="before"
      onClick={loadMoreBinded}
      primary
    />);
  }

  return <div className="EndOfMoviesList">End of Movies list.</div>;
};

LoadMoreButton.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
