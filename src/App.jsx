import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan700 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getGenres from './actions/genresActions';
import { firebaseStateObserver } from './actions/userActions';
import './App.css';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import Footer from './components/Footer';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan700,
  },
});

class App extends Component {

  componentDidMount() {
    this.props.dispatch(firebaseStateObserver());
    this.props.dispatch(getGenres());
  }

  handleSearchSubmit = (userQuery) => {
    if (userQuery) {
      this.props.ownProps.router.push(`/search?userQuery=${encodeURIComponent(userQuery)}`);
    }
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
          <div className="App__header">
            <Navbar
              user={this.props.user}
              dispatch={this.props.dispatch}
            />
          </div>
          <div className="App__content">
            <SearchInput
              onSubmit={this.handleSearchSubmit}
              defaultValue={this.props.ownProps.location.query.userQuery || ''}
            />
            { this.props.children }
          </div>
          <div className="App__footer">
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  ownProps,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  ownProps: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(App);
