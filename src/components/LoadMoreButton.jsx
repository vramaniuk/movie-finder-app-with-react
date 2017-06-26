import React from 'react';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import './LoadMoreButton.css';

const LoadMoreButton = ({ callback, page, totalPages, loadMore }) => {
  if (page < totalPages) {
    return (<RaisedButton
      className="LoadMoreButton"
      icon={<AddCircleOutline />}
      fullWidth
      label="Load more"
      labelPosition="before"
      onClick={loadMore.bind(null, callback)}
      primary
    />);
  }

  return <div className="EndOfMoviesList">End of Movies list.</div>;
};

export default LoadMoreButton;
