import React from 'react';
import { func } from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import ModalWrapper from 'components/common/ModalWrapper';
import Avatar from 'components/common/Avatar';
import CustomButton from 'components/common/CustomButton';
import strings from 'locale';
import { MATCH_SHAPE } from 'constants/shapes';
import ovals from 'assets/images/match.png';
import styles from './styles';

const {
  MATCH: { modalTitle, message, skip, chatButton },
} = strings;

const MatchModal = ({ matchedUser, onHide, onStartChatting }) => (
  <ModalWrapper>
    <Image source={ovals} />
    <Text style={styles.title}>{modalTitle}</Text>
    <Text style={styles.message}>{message}</Text>
    <View style={styles.matchedUser}>
      <Avatar uri={matchedUser.avatar.smallThumbUrl} style={styles.avatar} />
      <Text style={styles.name}>{matchedUser.fullName}</Text>
    </View>
    <CustomButton
      handleOnPress={onStartChatting}
      additionalStyles={styles.chatButton}
      title={chatButton}
    />
    <TouchableOpacity onPress={onHide} style={styles.skipButton}>
      <Text style={styles.name}>{skip}</Text>
    </TouchableOpacity>
  </ModalWrapper>
);

MatchModal.propTypes = {
  matchedUser: MATCH_SHAPE.isRequired,
  onHide: func.isRequired,
  onStartChatting: func.isRequired,
};

export default MatchModal;
