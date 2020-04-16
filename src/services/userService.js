import api from 'api';

class UserService {
  login(user) {
    return api.post('/users/sign_in', user);
  }

  facebookLogin(token) {
    return api.post('/users/facebook', token);
  }

  logout() {
    return api.delete('/users/sign_out');
  }

  signUp(user) {
    return api.post('/users', user);
  }
}

export default new UserService();
