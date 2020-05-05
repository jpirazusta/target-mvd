import React from 'react';
import { Bubble } from 'react-native-gifted-chat';
import styles from './styles';

const ChatBubble = props => (
  <Bubble
    {...props}
    textStyle={{ left: styles.text, right: styles.text }}
    wrapperStyle={{
      left: styles.backgroundGray,
      right: styles.backgroundYellow,
    }}
  />
);

export default ChatBubble;
