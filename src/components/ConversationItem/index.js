import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { func } from 'prop-types';

import Avatar from 'components/common/Avatar';
import { CONVERSATION_SHAPE } from 'constants/shapes';
import common from 'constants/commonStyles';
import styles from './styles';

const ConversationItem = ({ conversation, onSelect }) => {
  const { lastMessage, topicIcon, user } = conversation;
  const { avatar, fullName } = user;
  return (
    <TouchableOpacity style={styles.row} onPress={onSelect}>
      <View style={common.row}>
        <Avatar uri={avatar.smallThumbUrl} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{fullName}</Text>
          {lastMessage && <Text style={styles.lastMessage}>{lastMessage}</Text>}
        </View>
      </View>
      <Image source={{ uri: topicIcon }} style={styles.topicIcon} />
    </TouchableOpacity>
  );
};

ConversationItem.propTypes = {
  conversation: CONVERSATION_SHAPE.isRequired,
  onSelect: func.isRequired,
};

export default ConversationItem;
