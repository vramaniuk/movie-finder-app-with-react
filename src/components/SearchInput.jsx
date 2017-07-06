import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';


class SearchInput extends Component {
  state = {
    searchText: this.props.defaultValue || '',
  };

  componentWillReceiveProps(nextProps) {
    const searchText = this.props.defaultValue;
    const newSearchText = nextProps.defaultValue;

    if (searchText !== newSearchText) {
      this.setState({
        searchText: newSearchText || '',
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  onChangeHandler = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ textAlign: 'center' }}>
        <TextField
          floatingLabelText="Search movies..."
          value={this.state.searchText}
          onChange={this.onChangeHandler}
          name="searchText"
        />
        <IconButton type="submit"><Search /></IconButton>
      </form>
    );
  }
}
SearchInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
