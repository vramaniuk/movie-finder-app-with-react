import firebase from 'firebase';

export const createNewUser = ({ email, password }) => (dispatch) => {
  dispatch({
    type: 'CREATE_NEW_USER',
  });
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      dispatch({
        type: 'CLEAR_USER',
        error: {
          code: error.code,
          message: error.message,
        },
      });
    });
};

export const logIn = ({ email, password }) => (dispatch) => {
  dispatch({
    type: 'LOGIN_USER',
  });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      dispatch({
        type: 'CLEAR_USER',
        error: {
          code: error.code,
          message: error.message,
        },
      });
    });
};

export const firebaseStateObserver = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.database().ref(`users/${user.uid}/favoriteMovies`).on('value', (res) => {
        const resMoviesObj = res.val() || {};
        const favoriteMovies = [];
        Object.keys(resMoviesObj).forEach((objKey) => {
          favoriteMovies.push(resMoviesObj[objKey]);
        });
        dispatch({
          type: 'FILL_USER',
          payload: {
            isLoggedIn: true,
            userId: user.uid,
            email: user.email,
            favoriteMovies,
          },
        });
      });
    } else {
      dispatch({
        type: 'NOT_AUTHORIZED_USER',
      });
    }
  });
};

export const logoutFromFirebase = () => (dispatch) => {
  firebase.auth().signOut();
  dispatch({
    type: 'LOGOUT_USER',
  });
};

