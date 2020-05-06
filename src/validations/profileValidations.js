export default {
  username: {
    presence: true,
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
  },
};
