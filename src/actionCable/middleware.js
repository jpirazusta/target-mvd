import Config from 'react-native-config';

import {
  createConsumer,
  disconnectActionCable,
  receiveMessage,
  sendMessage,
  subscribe,
  unsubscribe,
} from 'actions/chatActions';
import { CHAT_CHANNEL, SEND_MESSAGE } from 'constants/chat';
import { applyQueryParams } from 'utils/helpers';
import actionCable from './actionCable';

const actionCableMiddleware = (() => {
  let cable = null;
  const chatChannels = [];

  return store => next => action => {
    switch (action.type) {
      case createConsumer.toString(): {
        cable?.disconnect();
        const { uid } = action.payload;

        const queryParams = {
          uid,
        };

        cable = actionCable.createConsumer(applyQueryParams(Config.CABLE_URL, queryParams));

        break;
      }

      case subscribe.toString(): {
        const { matchId } = action.payload;

        const channel = cable.subscriptions.create(
          { channel: CHAT_CHANNEL, match_conversation_id: matchId },
          {
            received: message => {
              store.dispatch(receiveMessage(message));
            },

            speak: (message, matchId) => {
              const { text: content } = message;

              const data = {
                match_conversation_id: matchId,
                content,
              };
              channel.perform(SEND_MESSAGE, data);
            },
          },
        );

        chatChannels.push(channel);
        break;
      }

      case unsubscribe.toString(): {
        const channel = chatChannels.shift();
        channel?.unsubscribe();
        break;
      }

      case disconnectActionCable.toString(): {
        cable?.disconnect();
        break;
      }

      case sendMessage.toString(): {
        const { message, matchId } = action.payload;
        const [channel] = chatChannels;
        channel.speak(message, matchId);
        break;
      }

      default:
        break;
    }
    next(action);
  };
})();

export default actionCableMiddleware;
