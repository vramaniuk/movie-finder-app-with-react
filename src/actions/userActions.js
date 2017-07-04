import firebase from 'firebase';

export const createNewUser = ({ email, password }) => (dispatch) => {
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
        const resMoviesObj = res.val()||{};
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
        type: 'CLEAR_USER',
      });
    }
  });
};

export const logoutFromFirebase = () => () => {
  firebase.auth().signOut();
};

