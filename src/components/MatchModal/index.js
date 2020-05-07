import React from 'react';
import { func } from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Modal from 'components/common/Modal';
import Avatar from 'components/common/Avatar';
import Button from 'components/common/Button';
import strings from 'locale';
import { MATCH_SHAPE } from 'constants/shapes';
import ovals from 'assets/images/match.png';
import styles from './styles';

const {
  MATCH: { modalTitle, message, skip, chatButton },
} = strings;

const MatchModal = ({ matchedUser, onHide, onStartChatting }) => (
  <Modal>
    <Image source={ovals} />
    <Text style={styles.title}>{modalTitle}</Text>
    <Text style={styles.message}>{message}</Text>
    <View style={styles.matchedUser}>
      <Avatar uri={matchedUser.avatar.smallThumbUrl} style={styles.avatar} />
      <Text style={styles.name}>{matchedUser.fullName}</Text>
    </View>
    <Button
      handleOnPress={onStartChatting}
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
  onHide: func.isRequired,
  onStartChatting: func.isRequired,
};

export default MatchModal;
