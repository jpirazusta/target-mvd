import { createReducer } from '@rootstrap/redux-tools';
import {
  loginSuccess,
  signUpSuccess,
  logoutSuccess,
  updateSession,
  facebookLoginSuccess,
} from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleFacebookLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

export default createReducer(initialState, {
  [loginSuccess]: handleLoginSuccess,
  [facebookLoginSuccess]: handleFacebookLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
});
