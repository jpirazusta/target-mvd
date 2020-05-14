import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { func, oneOfType, bool, arrayOf, string, objectOf } from 'prop-types';
import { LOADING } from '@rootstrap/redux-tools';

import useTargetForm from 'hooks/useTargetForm';
import { getStringWithCondition } from 'utils/helpers';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import strings from 'locale';
import { BLACK } from 'constants/colors';
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
    titleLabel,
    titlePlaceholder,
    createButton,
    deleteButton,
  },
} = strings;

const FIELDS = {
  areaLength: 'areaLength',
  title: 'title',
};

const TargetFormContent = ({
  onCreate,
  onDelete,
  onShowTopics,
  selectedTopic,
  topics,
  existent,
  actualTopic,
  setActualTopic,
  visible,
  initialValues,
}) => {
  const {
    values,
    setValues,
    errors,
    handleOnPress,
    targetStatus,
    targetError,
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
    visible,
    initialValues,
  });

  const onEndEditingArea = () => {
    setValues({
      ...values,
      areaLength: getStringWithCondition(
        values.areaLength,
        `${values.areaLength} m`,
        initialValues.areaLength,
      ),
    });
  };

  const allErrors = { title: !existent && errors.title, targetError, topicError };

  return (
    <>
      <Input
        label={getStringWithCondition(existent, areaEdit, area)}
        testID="area-input"
        keyboardType="numeric"
        invalid={!existent && targetError}
        short={false}
        additionalStyles={styles.inputContainer}
        onBlur={areaInputProps.onBlur}
        onChangeText={areaInputProps.onChangeText}
        value={getStringWithCondition(
          existent,
          existent && `${existent.radius.toString()} m`,
          areaInputProps.value,
        )}
        editable={!existent}
        onFocus={() => setValues({ ...values, areaLength: '' })}
        onEndEditing={onEndEditingArea}
      />
      <Input
        label={titleLabel}
        testID="target-title-input"
        invalid={!existent && (targetError || errors[FIELDS.title])}
        short={false}
        additionalStyles={styles.inputContainer}
        placeholder={titlePlaceholder}
        placeholderTextColor={BLACK}
        onBlur={titleInputProps.onBlur}
        onChangeText={titleInputProps.onChangeText}
        value={getStringWithCondition(existent, existent && existent.title, titleInputProps.value)}
        editable={!existent}
      />
      <>
        <Text style={[common.inputLabel, common.leftPadding]}>
          {getStringWithCondition(existent, topicLabelEdit, topicLabel)}
        </Text>
        <TouchableOpacity
          style={[styles.topic, (topicError || targetError) && common.inputBorderError]}
          onPress={onShowTopics}
          disabled={Boolean(existent)}>
          <Text style={[styles.topicInput, IS_ANDROID && fonts.bold]}>
            {actualTopic || topicText()}
          </Text>
        </TouchableOpacity>
      </>
      <ErrorView errors={allErrors} />
      {existent ? (
        <Button
          handleOnPress={onDelete}
          additionalStyles={styles.deleteButton}
          title={deleteButton}
          isLoading={targetStatus === LOADING}
        />
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
  onDelete: func.isRequired,
  onShowTopics: func.isRequired,
  selectedTopic: oneOfType([TOPIC_SHAPE, bool]).isRequired,
  topics: oneOfType([arrayOf(TOPIC_SHAPE), bool]).isRequired,
  existent: oneOfType([TARGET_SHAPE, bool]).isRequired,
  actualTopic: string.isRequired,
  setActualTopic: func.isRequired,
  visible: bool.isRequired,
  initialValues: objectOf(string),
};

TargetFormContent.defaultProps = {
  initialValues: { areaLength: '200 m' },
};

export default TargetFormContent;
