import api from 'api';

class TargetService {
  getTargets() {
    return api.get('/targets');
  }

  getTopics() {
    return api.get('/topics');
  }
}

export default new TargetService();
