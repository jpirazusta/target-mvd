import { createThunk, createAction } from '@rootstrap/redux-tools';
import userService from 'services/userService';
import parseError from 'utils/parseError';

export const login = createThunk('LOGIN', async user => {
  try {
    const {
      data: {
        data: { email: loggedUser },
      },
    } = await userService.login({ user });
    return loggedUser;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const facebookLogin = createThunk('FB_LOGIN', async accessToken => {
  try {
    const {
      data: {
        data: { email: loggedUser },
      },
    } = await userService.facebookLogin({ accessToken });
    return loggedUser;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const signUp = createThunk('SIGNUP', async user => {
  try {
    const {
      data: { email: loggedUser },
    } = await userService.signUp({ user });
    return loggedUser;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const updateSession = createAction('UPDATE_SESSION');

export const { success: loginSuccess } = login;
export const { success: facebookLoginSuccess } = facebookLogin;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
