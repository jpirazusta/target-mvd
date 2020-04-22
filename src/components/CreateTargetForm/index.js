import React from 'react';
import { func, oneOfType, bool } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { LOADING } from '@rootstrap/redux-tools';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import strings from 'locale';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import createTargetValidations from 'validations/createTargetValidations';
import useCreateTargetForm from 'hooks/useCreateTargetForm';
import useTextInputProps from 'hooks/useTextInputProps';
import { BLACK } from 'constants/colors';
import { IS_ANDROID, TOPIC_SHAPE } from 'constants/common';
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
    loadingTopics,
    topicPlaceholder,
    area,
    areaPlaceholder,
    titleLabel,
    titlePlaceholder,
    buttonTitle,
  },
} = strings;

const CreateTargetForm = ({ onSubmit, onShowTopics, onHide, topic }) => {
  const validator = useValidation(createTargetValidations);

  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true,
    },
    [onSubmit],
  );

  const {
    handleOnPress,
    targetError,
    targetStatus,
    getTopicsError,
    getTopicsStatus,
    topicError,
  } = useCreateTargetForm(topic, emptyTopic, handleSubmit);

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  const topicText = () => {
    if (getTopicsError) return topicsError;
    if (getTopicsStatus === LOADING) return loadingTopics;
    return (topic && topic.label) || topicPlaceholder;
  };

  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={onHide} />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            label={area}
            testID="area-input"
            keyboardType="numeric"
            error={errors[FIELDS.areaLength]}
            invalid={targetError || errors[FIELDS.areaLength]}
            short={false}
            placeholder={areaPlaceholder}
            placeholderTextColor={BLACK}
            {...inputProps(FIELDS.areaLength)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label={titleLabel}
            testID="target-title-input"
            error={errors[FIELDS.title]}
            invalid={targetError || errors[FIELDS.title]}
            short={false}
            placeholder={titlePlaceholder}
            placeholderTextColor={BLACK}
            {...inputProps(FIELDS.title)}
          />
        </View>
        <View>
          <Text style={[common.inputLabel, common.leftPadding]}>{topicLabel}</Text>
          <TouchableOpacity
            style={[styles.topic, (topicError || targetError) && common.inputBorderError]}
            onPress={onShowTopics}>
            <Text style={[styles.topicInput, IS_ANDROID && fonts.bold]}>{topicText()}</Text>
          </TouchableOpacity>
        </View>
        <ErrorView errors={{ ...errors, targetError, topicError }} />
        <Button
          testID="save-target-button"
          handleOnPress={handleOnPress}
          additionalStyles={styles.button}
          title={buttonTitle}
          isLoading={targetStatus === LOADING}
        />
      </KeyboardAwareScrollView>
    </>
  );
};

CreateTargetForm.propTypes = {
  onSubmit: func.isRequired,
  onShowTopics: func.isRequired,
  onHide: func.isRequired,
  topic: oneOfType([TOPIC_SHAPE, bool]).isRequired,
};

export default CreateTargetForm;
