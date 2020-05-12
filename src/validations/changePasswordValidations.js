export default {
  currentPassword: {
    presence: true,
    length: { minimum: 6 },
  },
  password: {
    presence: true,
    length: { minimum: 6 },
  },
  passwordConfirmation: {
    presence: true,
    equality: { attribute: 'password' },
  },
};
