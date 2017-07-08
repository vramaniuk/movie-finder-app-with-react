const initialState = {
  isLoggedIn: false,
};

const user = (state = {}, action) => {
  switch (action.type) {
    case 'FILL_USER':
      return { ...action.payload };
    case 'CREATE_NEW_USER':
      return { ...initialState, error: action.error };
    case 'NOT_AUTHORIZED_USER':
      return { ...initialState, error: action.error };
    case 'LOGIN_USER':
      return { ...initialState, error: action.error };
    case 'LOGOUT_USER':
      return { ...initialState, error: action.error };
    case 'CLEAR_USER':
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default user;
