import React from 'react';
import { func } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import useTopicIcon from 'hooks/useTopicIcon';
import ModalWrapper from 'components/common/ModalWrapper';
import MarkerView from 'components/common/MarkerView';
import ErrorView from 'components/common/ErrorView';
import CustomButton from 'components/common/CustomButton';
import { deleteTarget } from 'actions/targetActions';
import strings from 'locale';
import { TARGET_SHAPE } from 'constants/shapes';
import styles from './styles';

const DeleteConfirmation = ({ target, onDelete, onHide }) => {
  const { id, title, topicId } = target;
  const icon = useTopicIcon(topicId);
  const { error, status } = useStatus(deleteTarget);
  const { TARGET, COMMON } = strings;
  const { deleteQuestion, deleteReminder, deleteButton } = TARGET;

  return (
    <ModalWrapper>
      <Text style={styles.question}>{deleteQuestion}</Text>
      <View style={styles.marker}>
        <MarkerView icon={icon} />
      </View>
      <Text style={styles.targetTitle}>{title}</Text>
      <Text style={styles.reminder}>{deleteReminder}</Text>
      <ErrorView errors={{ error }} />
      <CustomButton
        handleOnPress={() => onDelete(id)}
        additionalStyles={styles.deleteButton}
        title={deleteButton}
        isLoading={status === LOADING}
      />
      <TouchableOpacity onPress={onHide} style={styles.cancelButton}>
        <Text style={styles.cancelText}>{COMMON.cancel}</Text>
      </TouchableOpacity>
    </ModalWrapper>
  );
};

DeleteConfirmation.propTypes = {
  target: TARGET_SHAPE,
  onDelete: func.isRequired,
  onHide: func.isRequired,
};

export default DeleteConfirmation;
