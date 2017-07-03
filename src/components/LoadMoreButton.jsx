import React from 'react';
import PropTypes from 'prop-types';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import './LoadMoreButton.css';


const LoadMoreButton = ({ callback, page, totalPages, loadMore }) => {
  const loadMoreBinded = loadMore.bind(null, callback);
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
  callback: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
