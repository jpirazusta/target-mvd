import React from 'react';
import { func } from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Modal from 'components/common/Modal';
import Button from 'components/common/Button';
import strings from 'locale';
import { MATCH_SHAPE, CONVERSATION_SHAPE } from 'constants/shapes';
import ovals from 'assets/images/match.png';
import defaultAvatar from 'assets/images/defaultProfileImage.png';
import styles from './styles';

const {
  MATCH: { modalTitle, message, skip, chatButton },
} = strings;

const MatchModal = ({ matchedUser, matchConversation, onHide, onStartChatting }) => (
  <Modal>
    <Image source={ovals} />
    <Text style={styles.title}>{modalTitle}</Text>
    <Text style={styles.message}>{message}</Text>
    <View style={styles.matchedUser}>
      <Image
        source={
          matchedUser.avatar.smallThumbUrl
            ? { uri: matchedUser.avatar.smallThumbUrl }
            : defaultAvatar
        }
        style={styles.avatar}
      />
      <Text style={styles.name}>{matchedUser.fullName}</Text>
    </View>
    <Button
      handleOnPress={() => onStartChatting({ matchedUser, matchConversation })}
      additionalStyles={styles.chatButton}
      title={chatButton}
    />
    <TouchableOpacity onPress={onHide} style={styles.skipButton}>
      <Text style={styles.name}>{skip}</Text>
    </TouchableOpacity>
  </Modal>
);

MatchModal.propTypes = {
  matchedUser: MATCH_SHAPE.isRequired,
  matchConversation: CONVERSATION_SHAPE.isRequired,
  onHide: func.isRequired,
  onStartChatting: func.isRequired,
};

export default MatchModal;
