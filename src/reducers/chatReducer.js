import { createReducer } from '@rootstrap/redux-tools';
import {
  CLEAR_CHAT_STATE,
  RECEIVE_MESSAGE,
  getMessagesSuccess,
  getConversationsSuccess,
} from 'actions/chatActions';

const initialState = {
  conversations: [],
};

const isInCollection = (id, array) => array.find(({ id: elementId }) => elementId === id);

const handleClearChatState = state => {
  state.messages = undefined;
};

const handleGetMessagesSuccess = (state, { payload: { messages, page } }) => {
  if (page !== 1) {
    const newMessages = messages.filter(({ id }) => !isInCollection(id, state.messages));
    state.messages = [...newMessages, ...state.messages];
  } else {
    state.messages = messages;
  }
};

const handleReceiveMessage = (state, { payload }) => {
  state.messages = [...state.messages, payload];
};

const handleGetConversationsSuccess = (state, { payload }) => {
  state.conversations = payload;
};

export default createReducer(initialState, {
  [getMessagesSuccess]: handleGetMessagesSuccess,
  [getConversationsSuccess]: handleGetConversationsSuccess,
  [CLEAR_CHAT_STATE]: handleClearChatState,
  [RECEIVE_MESSAGE]: handleReceiveMessage,
});
