import api from 'api';

const prefix = '/users';

class UserService {
  login(user) {
    return api.post(`${prefix}/sign_in`, user);
  }

  facebookLogin(token) {
    return api.post(`${prefix}/facebook`, token);
  }

  logout() {
    return api.delete(`${prefix}/sign_out`);
  }

  signUp(user) {
    return api.post(prefix, user);
  }

  getProfile(id) {
    return api.get(`${prefix}/${id}`);
  }
}

export default new UserService();
