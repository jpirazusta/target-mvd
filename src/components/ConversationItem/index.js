import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { func } from 'prop-types';

import Avatar from 'components/common/Avatar';
import Badge from 'components/common/Badge';
import { CONVERSATION_SHAPE } from 'constants/shapes';
import commonStyles from 'constants/commonStyles';
import styles from './styles';

const ConversationItem = ({ conversation, onSelect }) => {
  const {
    lastMessage,
    topicIcon,
    unreadMessages,
    user: { avatar, fullName },
  } = conversation;

  return (
    <TouchableOpacity style={styles.row} onPress={onSelect}>
      <View style={commonStyles.row}>
        <Avatar uri={avatar.smallThumbUrl} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{fullName}</Text>
          {lastMessage && (
            <Text style={styles.lastMessage} ellipsizeMode="tail" numberOfLines={1}>
              {lastMessage}
            </Text>
          )}
        </View>
      </View>
      <Image source={{ uri: topicIcon }} style={styles.topicIcon} />
      {unreadMessages > 0 && <Badge number={unreadMessages} position={styles.badgePosition} />}
    </TouchableOpacity>
  );
};

ConversationItem.propTypes = {
  conversation: CONVERSATION_SHAPE.isRequired,
  onSelect: func.isRequired,
};

export default ConversationItem;
