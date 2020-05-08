import { createThunk, createAction } from '@rootstrap/redux-tools';
import userService from 'services/userService';

export const login = createThunk('LOGIN', async user => {
  const {
    data: { data: loggedUser },
  } = await userService.login({ user });
  return loggedUser;
});

export const facebookLogin = createThunk('FB_LOGIN', async accessToken => {
  const {
    data: { data: loggedUser },
  } = await userService.facebookLogin({ accessToken });
  return loggedUser;
});

export const logout = createThunk('LOGOUT', async () => {
  await userService.logout();
});

export const signUp = createThunk('SIGNUP', async user => {
  const {
    data: { email: loggedUser },
  } = await userService.signUp({ user });
  return loggedUser;
});

export const getProfile = createThunk('GET_PROFILE', async id => {
  const {
    data: { user },
  } = await userService.getProfile(id);
  return user;
});

export const updateProfile = createThunk('UPDATE_PROFILE', userService.updateProfile);

export const updateSession = createAction('UPDATE_SESSION');

export const { success: loginSuccess } = login;
export const { success: facebookLoginSuccess } = facebookLogin;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
export const { success: getProfileSuccess } = getProfile;
export const { reset: updateProfileReset } = updateProfile;
