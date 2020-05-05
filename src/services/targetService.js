import api from 'api';

const prefix = '/targets';

class TargetService {
  getTargets() {
    return api.get(prefix);
  }

  getTopics() {
    return api.get('/topics');
  }

  createTarget(target) {
    return api.post(prefix, target);
  }

  deleteTarget(targetId) {
    return api.delete(`${prefix}/${targetId}`);
  }
}

export default new TargetService();
