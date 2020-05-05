import { createThunk, createAction } from '@rootstrap/redux-tools';

import chatService from 'services/chatService';

const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
const GET_MESSAGES = 'GET_MESSAGES';
const CREATE_CONSUMER = 'CREATE_CONSUMER';
const DISCONNECT_ACTION_CABLE = 'DISCONNECT_ACTION_CABLE';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const CLEAR_CHAT_STATE = 'CLEAR_CHAT_STATE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const clearChatState = createAction(CLEAR_CHAT_STATE);
export const createConsumer = createAction(CREATE_CONSUMER);
export const disconnectActionCable = createAction(DISCONNECT_ACTION_CABLE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const sendMessage = createAction(SEND_MESSAGE);
export const subscribe = createAction(SUBSCRIBE);
export const unsubscribe = createAction(UNSUBSCRIBE);

export const getConversations = createThunk(GET_CONVERSATIONS, async () => {
  return (await chatService.getConversations()).data.matches;
});

export const getMessages = createThunk(GET_MESSAGES, async (id, page) => {
  const {
    data: { messages },
  } = await chatService.getMessages(id, page);
  return { messages, page };
});

export const { success: getConversationsSuccess } = getConversations;
export const { success: getMessagesSuccess } = getMessages;
