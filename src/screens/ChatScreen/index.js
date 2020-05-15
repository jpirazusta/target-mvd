import React, { useEffect, useMemo, useState } from 'react';
import { object } from 'prop-types';
import { SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useDispatch, useSelector } from 'react-redux';
import { noop } from 'lodash';

import ChatBubble from 'components/ChatBubble';
import {
  clearChatState,
  createConsumer,
  disconnectActionCable,
  getMessages,
  sendMessage,
  subscribe,
  unsubscribe,
} from 'actions/chatActions';
import useSession from 'hooks/useSession';
import { CHAT_PAGE_COUNT } from 'constants/chat';
import defaultProfileImage from 'assets/images/defaultProfileImage.png';
import commonStyles from 'constants/commonStyles';

const ChatScreen = ({ route }) => {
  const {
    user: { id },
    info,
  } = useSession();
  const { matchId } = route.params;
  const dispatch = useDispatch();
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);

  useEffect(() => {
    const dispatches = async () => {
      await dispatch(createConsumer(info));
      await dispatch(subscribe({ matchId }));
      await dispatch(getMessages(matchId, 1));
    };
    dispatches();

    return () => {
      dispatch(unsubscribe());
      dispatch(disconnectActionCable());
      dispatch(clearChatState());
    };
  }, []);

  const serverMessages = useSelector(({ chat: { messages } }) => messages);
  const messages = useMemo(
    () =>
      serverMessages
        ?.map(({ id, content, date, user: { id: messageUserId, avatar: { url } } }) => ({
          _id: id,
          text: content,
          createdAt: date,
          user: {
            _id: messageUserId,
            avatar: url || defaultProfileImage,
          },
        }))
        .reverse(),
    [serverMessages],
  );

  const handleOnSend = newMessages => {
    const [message] = newMessages;
    dispatch(sendMessage({ message, matchId }));
  };

  const getPreviousMessages = async () => {
    setIsLoadingEarlier(true);
    if (messages) {
      const page = Math.floor(messages.length / CHAT_PAGE_COUNT) + 1;
      await dispatch(getMessages(matchId, page));
    }
    setIsLoadingEarlier(false);
    return false;
  };

  return (
    <SafeAreaView style={commonStyles.screenContainer}>
      <GiftedChat
        messages={messages}
        onSend={handleOnSend}
        user={{ _id: id }}
        extraData={{ isLoadingEarlier }}
        isLoadingEarlier={isLoadingEarlier}
        loadEarlier
        onLoadEarlier={getPreviousMessages}
        alwaysShowSend
        renderAvatar={null}
        alignTop
        renderBubble={props => <ChatBubble {...props} />}
        renderTime={noop}
        bottomOffset={0}
        showUserAvatar
      />
    </SafeAreaView>
  );
};

ChatScreen.propTypes = {
  route: object.isRequired,
};

export default ChatScreen;
