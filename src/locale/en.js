export default {
  COMMON: {
    title: 'TARGET MVD',
    loading: 'LOADING',
    somethingWentWrong: 'something went wrong',
    cancel: 'Cancel',
    done: 'DONE',
    ok: 'OK',
    email: 'EMAIL',
    password: 'PASSWORD',
  },

  SIGN_IN: {
    title: 'SIGN IN',
    button: 'SIGN IN',
  },

  MAIN: {
    title: 'Target Points',
  },

  SIGN_UP: {
    title: 'SIGN UP',
    name: 'NAME',
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
    areaEdit: 'AREA LENGTH',
    titleLabel: 'TARGET TITLE',
    titlePlaceholder: 'Choose a title for your target',
    topicLabel: 'SELECT A TOPIC',
    topicLabelEdit: 'TOPIC',
    topicPlaceholder: 'What do you want to talk about?',
    emptyTopic: "Topic can't be blank",
    loadingTopics: 'Loading topics',
    createButton: 'SAVE TARGET',
    saveButton: 'SAVE',
    deleteButton: 'DELETE',
    deleteQuestion: 'Sure you want to delete this target?',
    deleteReminder:
      "Remember that if you delete it, you won't be able to chat with it's matches anymore",
  },

  MATCH: {
    modalTitle: 'Yey!',
    message: 'You have a new match!',
    skip: 'Skip',
    chatButton: 'Cool! Start chatting',
  },

  CHAT: {
    title: 'Chat',
  },

  PROFILE: {
    title: 'Profile',
    usernameLabel: 'USERNAME',
    firstNameLabel: 'FIRST NAME',
    lastNameLabel: 'LAST NAME',
    selectAvatar: 'Select Avatar',
    button: 'SAVE CHANGES',
    success: 'Profile has been updated',
    logout: 'Log out',
    changePassword: 'Change Password',
  },

  PASSWORD: {
    currentLabel: 'ENTER YOUR CURRENT\nPASSWORD TO EDIT',
    newLabel: 'NEW PASSWORD',
    confirmLabel: 'CONFIRM NEW PASSWORD',
    success: 'Your password has been changed successfully!',
  },

  CONTACT: {
    button: 'Contact',
    questionsLabel: 'QUESTIONS',
    send: 'SEND',
    success: 'Thank you for your contact. We will be sending you an email soon.',
  },
};
