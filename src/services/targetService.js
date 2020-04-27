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

  deleteTarget(targetId) {
    return api.delete(`/targets/${targetId}`);
  }
}

export default new TargetService();
