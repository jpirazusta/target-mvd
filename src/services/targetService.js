import api from 'api';

class TargetService {
  getTargets() {
    return api.get('/targets');
  }

  getTopics() {
    return api.get('/topics');
  }

  createTarget(target) {
    return api.post('/targets', target);
  }
}

export default new TargetService();
