export default {
  COMMON: {
    title: 'TARGET MVD',
    loading: 'LOADING',
    somethingWentWrong: 'something went wrong',
  },

  SIGN_IN: {
    title: 'SIGN IN',
    email: 'EMAIL',
    password: 'PASSWORD',
    button: 'SIGN IN',
  },

  MAIN_SCREEN: {
    logout: 'SIGN OUT',
    title: 'Target Points',
  },

  SIGN_UP: {
    title: 'SIGN UP',
    name: 'NAME',
    email: 'EMAIL',
    password: 'PASSWORD',
    passwordConfirmation: 'CONFIRM PASSWORD',
    passwordPlaceholder: 'MIN. 6 CHARACTERS LONG',
    gender: 'GENDER',
    button: 'SIGN UP',
  },

  GENDER: {
    placeholder: { label: 'SELECT YOUR GENDER', value: '' },
    options: [
      { label: 'FEMALE', value: 'female' },
      { label: 'MALE', value: 'male' },
      { label: 'OTHER', value: 'other' },
    ],
  },

  FACEBOOK: {
    buttonTitle: 'CONNECT WITH FACEBOOK',
    loginError: 'Login failed with error:',
  },

  TARGET: {
    create: 'CREATE NEW TARGET',
    area: 'SPECIFY AREA LENGTH',
    areaPlaceholder: '0 m',
    titleLabel: 'TARGET TITLE',
    titlePlaceholder: 'Choose a title for your target',
    topicLabel: 'SELECT A TOPIC',
    topicPlaceholder: 'What do you want to talk about?',
    emptyTopic: "Topic can't be blank",
    topicsError: 'Could not get topics from server',
    loadingTopics: 'Loading topics',
    buttonTitle: 'SAVE TARGET',
  },
};
