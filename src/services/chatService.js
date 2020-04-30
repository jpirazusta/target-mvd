import api from 'api';
import { applyQueryParams } from 'utils/helpers';

const prefix = '/match_conversations';

class ChatService {
  getConversations() {
    return api.get(prefix);
  }

  getMessages(id, page) {
    const queryParams = {
      page,
    };
    const url = applyQueryParams(`${prefix}/${id}/messages`, queryParams);
    return api.get(url);
  }
}

export default new ChatService();
