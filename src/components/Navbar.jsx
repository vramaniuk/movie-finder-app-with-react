import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import logo from '../images/logo_408x161.png';
import './Navbar.css';
import { logoutFromFirebase } from '../actions/userActions';
import { CodepenIcon, GithubIcon } from '../helpers/index';
import SignupModal from '../containers/SignupModalContainer';
import LoginModal from '../containers/LoginModalContainer';

class Navbar extends Component {


  // static contextTypes = {
  //   router: PropTypes.object.isRequired,
  // };

  state = {
    isLoginModalOpen: false,
    isSignupModalOpen: false,
  };

  openLoginModal = () => {
    this.setState({ isLoginModalOpen: true });
  };

  openSignupModal = () => {
    this.setState({ isSignupModalOpen: true });
  };

  closeLoginModal = () => {
    this.setState({ isLoginModalOpen: false });
  };

  closeSignupModal = () => {
    this.setState({ isSignupModalOpen: false });
  };

  logout = () => {
    this.props.dispatch(logoutFromFirebase());
  };

  renderLoggedMenu=(props) => {
    return (
      <div>
        <span style={{ position: 'relative', top: '-6px' }}>Hi, { this.props.user.email }</span>
        <IconMenu
          {...props}
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem onTouchTap={() => this.context.router.push('/favorites')} primaryText="Favorite Movies" />
          <MenuItem primaryText="Log out" onTouchTap={this.logout} />
        </IconMenu>
      </div>
    );
  };

  renderLoginSignupBtns = () => (
    <div style={{ marginTop: '6px' }}>
      <RaisedButton label="Login" onClick={this.openLoginModal} style={{ marginRight: '10px' }} />
      <RaisedButton label="Signup" secondary onClick={this.openSignupModal} />
      <SignupModal isOpen={this.state.isSignupModalOpen} closeModal={this.closeSignupModal} />
      <LoginModal isOpen={this.state.isLoginModalOpen} closeModal={this.closeLoginModal} />
    </div>
  );

  render() {
    return (
      <div className="Navbar">
        <AppBar
          className="Navbar__appbar"
          iconElementLeft={
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" style={{ width: '100px', marginTop: '6px' }} />
            </Link>
          }
          title={
            <div>
              <FlatButton
                label="Github"
                href="https://github.com/vramaniuk/movie-finder-app-with-react"
                target="_blank"
                icon={<GithubIcon viewBox="0 0 20 20" />}
                labelStyle={{ top: '-2px', paddingLeft: '2px' }}
              />
              <FlatButton
                label="Homework with DOM-AJAX (RWD)"
                href="https://vramaniuk.github.io/Home_Task_1-HTML_CSS-Variant2-/HomeTask2_DOM_AJAX.html"
                target="_blank"
                icon={<CodepenIcon viewBox="0 0 130 130" />}
                labelStyle={{ top: '-2px', paddingLeft: '5px' }}
              />
            </div>

          }
          iconElementRight={
            this.props.user.isLoggedIn ? this.renderLoggedMenu() : this.renderLoginSignupBtns()
          }
        />

      </div>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

Navbar.contextTypes = {
  router: PropTypes.object.isRequired,
};
export default Navbar;
