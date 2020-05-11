import React from 'react';
import { View, Text } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';
import styles from './styles';

const ChatBubble = props => {
  const {
    currentMessage: { createdAt },
    position,
  } = props;

  const date = new Date(createdAt).toLocaleString();
  const [, time, suffix] = date.split(' ');
  const [hours, minutes] = time.split(':');
  const timeStamp = `${hours}:${minutes} ${suffix}`;

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
