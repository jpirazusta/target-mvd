import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { func, oneOfType, bool, arrayOf, string } from 'prop-types';
import { LOADING } from '@rootstrap/redux-tools';

import useTargetForm from 'hooks/useTargetForm';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import strings from 'locale';
import { BLACK, RED } from 'constants/colors';
import { IS_ANDROID } from 'constants/common';
import { TOPIC_SHAPE, TARGET_SHAPE } from 'constants/shapes';
import common from 'constants/commonStyles';
import fonts from 'constants/fonts';
import styles from './styles';

const {
  TARGET: {
    emptyTopic,
    topicsError,
    topicLabel,
    topicLabelEdit,
    loadingTopics,
    topicPlaceholder,
    area,
    areaEdit,
    areaPlaceholder,
    titleLabel,
    titlePlaceholder,
    createButton,
    deleteButton,
    saveButton,
  },
} = strings;

const FIELDS = {
  areaLength: 'areaLength',
  title: 'title',
};

const TargetFormContent = ({
  onCreate,
  onShowTopics,
  selectedTopic,
  topics,
  existent,
  actualTopic,
  setActualTopic,
}) => {
  const {
    errors,
    handleOnPress,
    targetError,
    targetStatus,
    topicError,
    areaInputProps,
    titleInputProps,
    topicText,
  } = useTargetForm({
    existent,
    topics,
    setActualTopic,
    onCreate,
    selectedTopic,
    emptyTopic,
    FIELDS,
    topicsError,
    loadingTopics,
    topicPlaceholder,
  });

  return (
    <>
      <Input
        label={existent ? areaEdit : area}
        testID="area-input"
        keyboardType="numeric"
        error={errors[FIELDS.areaLength]}
        invalid={targetError || errors[FIELDS.areaLength]}
        short={false}
        additionalStyles={styles.inputContainer}
        placeholder={areaPlaceholder}
        placeholderTextColor={BLACK}
        onBlur={areaInputProps.onBlur}
        onChangeText={areaInputProps.onChangeText}
        value={existent ? existent.radius.toString() : areaInputProps.value}
      />
      <Input
        label={titleLabel}
        testID="target-title-input"
        error={errors[FIELDS.title]}
        invalid={targetError || errors[FIELDS.title]}
        short={false}
        additionalStyles={styles.inputContainer}
        placeholder={titlePlaceholder}
        placeholderTextColor={BLACK}
        onBlur={titleInputProps.onBlur}
        onChangeText={titleInputProps.onChangeText}
        value={existent ? existent.title : titleInputProps.value}
      />
      <>
        <Text style={[common.inputLabel, common.leftPadding]}>
          {existent ? topicLabelEdit : topicLabel}
        </Text>
        <TouchableOpacity
          style={[styles.topic, (topicError || targetError) && common.inputBorderError]}
          onPress={onShowTopics}>
          <Text style={[styles.topicInput, IS_ANDROID && fonts.bold]}>
            {actualTopic || topicText()}
          </Text>
        </TouchableOpacity>
      </>
      <ErrorView errors={{ ...errors, targetError, topicError }} />
      {existent ? (
        <View style={styles.buttonsContainer}>
          <Button
            additionalStyles={[styles.editButton, { backgroundColor: RED }]}
            title={deleteButton}
            isLoading={targetStatus === LOADING}
          />
          <Button
            additionalStyles={styles.editButton}
            title={saveButton}
            isLoading={targetStatus === LOADING}
          />
        </View>
      ) : (
        <Button
          testID="save-target-button"
          handleOnPress={handleOnPress}
          additionalStyles={styles.createButton}
          title={createButton}
          isLoading={targetStatus === LOADING}
        />
      )}
    </>
  );
};

TargetFormContent.propTypes = {
  onCreate: func.isRequired,
  onShowTopics: func.isRequired,
  selectedTopic: oneOfType([TOPIC_SHAPE, bool]).isRequired,
  topics: oneOfType([arrayOf(TOPIC_SHAPE), bool]).isRequired,
  existent: oneOfType([TARGET_SHAPE, bool]).isRequired,
  actualTopic: string.isRequired,
  setActualTopic: func.isRequired,
};

export default TargetFormContent;
