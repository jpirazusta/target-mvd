import React from 'react';
import { func } from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Modal from 'components/common/Modal';
import strings from 'locale';
import { MATCH_SHAPE } from 'constants/shapes';
import ovals from 'assets/images/match.png';
import defaultAvatar from 'assets/images/defaultProfileImage.png';
import styles from './styles';

const {
  MATCH: { modalTitle, message, skip },
} = strings;

const MatchModal = ({ match, onHide }) => (
  <Modal>
    <Image source={ovals} />
    <Text style={styles.title}>{modalTitle}</Text>
    <Text style={styles.message}>{message}</Text>
    <View style={styles.matchedUser}>
      <Image
        source={match.avatar.smallThumbUrl ? { uri: match.avatar.smallThumbUrl } : defaultAvatar}
        style={styles.avatar}
      />
      <Text style={styles.name}>{match.fullName}</Text>
    </View>
    <TouchableOpacity onPress={onHide} style={styles.skipButton}>
      <Text style={styles.name}>{skip}</Text>
    </TouchableOpacity>
  </Modal>
);

MatchModal.propTypes = {
  match: MATCH_SHAPE.isRequired,
  onHide: func.isRequired,
};

export default MatchModal;
