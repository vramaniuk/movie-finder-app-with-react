import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { createNewUser } from '../actions/userActions';

class SignupModal extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errorPassword: '',
    errorEmail: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.error) {
      const { code, message } = nextProps.user.error;

      if (code === 'auth/weak-password') {
        this.setState({
          errorEmail: '',
          errorPassword: message,
        });
      }

      if (code === 'auth/email-already-in-use') {
        this.setState({
          errorEmail: message,
          errorPassword: '',
        });
      }
    }
  }

  componentWillUnmount() {
    this.handleClose();
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleClose = () => {
    this.props.closeModal();
  };

  firebaseCreateUser = (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      const newUser = { email, password };

      this.props.dispatch(createNewUser(newUser));
    } else {
      this.setState({
        errorPassword: 'The password must match',
      });
    }
  };

  render() {
    return (

      <Dialog
        title="Signup form"
        contentStyle={{ width: '350px' }}
        modal={false}
        open={this.props.isOpen}
        onRequestClose={this.handleClose}
      >
        <form onSubmit={this.firebaseCreateUser}>
          <TextField
            floatingLabelText="Enter your email"
            errorText={this.state.errorEmail}
            fullWidth
            onChange={this.onChangeHandler}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <TextField
            floatingLabelText="Enter your password"
            errorText={this.state.errorPassword}
            fullWidth
            onChange={this.onChangeHandler}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <TextField
            floatingLabelText="Confirm your password"
            errorText={this.state.errorPassword}
            fullWidth
            onChange={this.onChangeHandler}
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            required
          />
          <RaisedButton
            style={{ marginTop: '25px', float: 'right' }}
            label="Create"
            secondary
            type="submit"
          />
        </form>
      </Dialog>
    );
  }
}

SignupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default SignupModal;
