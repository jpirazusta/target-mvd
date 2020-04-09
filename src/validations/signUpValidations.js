export default {
  name: {
    presence: true,
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: { minimum: 6 },
  },
  passwordConfirmation: {
    presence: true,
    equality: { attribute: 'password' },
  },
  gender: {
    presence: true,
  },
};
