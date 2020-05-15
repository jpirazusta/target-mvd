import React from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns';
import { Bubble } from 'react-native-gifted-chat';
import styles from './styles';

const ChatBubble = props => {
  const {
    currentMessage: { createdAt },
    position,
  } = props;

  const date = new Date(createdAt);
  const timeStamp = format(date, 'p');

  return (
    <View>
      <Bubble
        {...props}
        textStyle={{ left: styles.text, right: styles.text }}
        wrapperStyle={{
          left: styles.leftBubble,
          right: styles.rightBubble,
        }}
      />
      <Text style={[styles.time, styles[position]]}>{timeStamp}</Text>
    </View>
  );
};

export default ChatBubble;
