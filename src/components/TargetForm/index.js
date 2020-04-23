import React, { useEffect, useState } from 'react';
import { func, oneOfType, bool, arrayOf } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { LOADING } from '@rootstrap/redux-tools';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';

import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import strings from 'locale';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import createTargetValidations from 'validations/createTargetValidations';
import useCreateTargetForm from 'hooks/useCreateTargetForm';
import useTextInputProps from 'hooks/useTextInputProps';
import { IS_ANDROID } from 'constants/common';
import { TOPIC_SHAPE, TARGET_SHAPE } from 'constants/shapes';
import { BLACK, RED } from 'constants/colors';
import common from 'constants/commonStyles';
import fonts from 'constants/fonts';
import styles from './styles';

const FIELDS = {
  areaLength: 'areaLength',
  title: 'title',
};
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

const TargetForm = ({ onCreate, onShowTopics, onHide, selectedTopic, topics, existent }) => {
  const validator = useValidation(createTargetValidations);
  const [actualTopic, setActualTopic] = useState('');

  useEffect(() => {
    if (existent) {
      const {
        topic: { label },
      } = _.find(topics, ({ topic: { id } }) => id === existent.topicId);
      setActualTopic(label);
    }
  }, [existent, topics]);

  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onCreate,
      validator,
      validateOnBlur: true,
    },
    [onCreate],
  );

  const {
    handleOnPress,
    targetError,
    targetStatus,
    getTopicsError,
    getTopicsStatus,
    topicError,
  } = useCreateTargetForm(selectedTopic, emptyTopic, handleSubmit);

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);
  const areaInputProps = { ...inputProps(FIELDS.areaLength) };
  const titleInputProps = { ...inputProps(FIELDS.title) };

  const topicText = () => {
    if (getTopicsError) return topicsError;
    if (getTopicsStatus === LOADING) return loadingTopics;
    return (selectedTopic && selectedTopic.label) || topicPlaceholder;
  };

  return (
    <>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => {
          setActualTopic('');
          onHide();
        }}
      />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
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
      </KeyboardAwareScrollView>
    </>
  );
};

TargetForm.propTypes = {
  onCreate: func.isRequired,
  onShowTopics: func.isRequired,
  onHide: func.isRequired,
  selectedTopic: oneOfType([TOPIC_SHAPE, bool]).isRequired,
  topics: oneOfType([arrayOf(TOPIC_SHAPE), bool]).isRequired,
  existent: oneOfType([TARGET_SHAPE, bool]).isRequired,
};

export default TargetForm;
