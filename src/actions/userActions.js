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

export const changePassword = createThunk('CHANGE_PASSWORD', userService.changePassword);

export const getProfile = createThunk('GET_PROFILE', async id => {
  const {
    data: { user },
  } = await userService.getProfile(id);
  return user;
});

export const updateProfile = createThunk('UPDATE_PROFILE', userService.updateProfile);

export const updateSession = createAction('UPDATE_SESSION');

export const sendQuestions = createThunk('SEND_QUESTIONS', userService.sendQuestions);

export const { success: loginSuccess } = login;
export const { success: facebookLoginSuccess } = facebookLogin;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
export const { reset: changePasswordReset } = changePassword;
export const { success: getProfileSuccess } = getProfile;
export const { reset: updateProfileReset } = updateProfile;
export const { reset: sendQuestionsReset } = sendQuestions;
