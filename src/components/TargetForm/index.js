import React, { useState } from 'react';
import { func, oneOfType, bool, arrayOf } from 'prop-types';
import { View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { IS_ANDROID } from 'constants/common';
import { TOPIC_SHAPE, TARGET_SHAPE } from 'constants/shapes';
import TargetFormContent from './TargetFormContent';
import styles from './styles';

const TargetForm = ({
  onCreate,
  onDelete,
  onShowTopics,
  onHide,
  selectedTopic,
  topics,
  existent,
  visible,
}) => {
  const [actualTopic, setActualTopic] = useState('');

  return (
    <>
      <TouchableOpacity
        style={styles.fullScreen}
        onPress={() => {
          setActualTopic('');
          onHide();
        }}
      />
      {IS_ANDROID ? (
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.androidContainer}>
          <TargetFormContent
            onCreate={onCreate}
            onDelete={onDelete}
            onShowTopics={onShowTopics}
            selectedTopic={selectedTopic}
            topics={topics}
            existent={existent}
            actualTopic={actualTopic}
            setActualTopic={setActualTopic}
            visible={visible}
          />
        </KeyboardAwareScrollView>
      ) : (
        <KeyboardAvoidingView behavior="position" style={styles.mainContainer}>
          <View style={styles.container}>
            <TargetFormContent
              onCreate={onCreate}
              onDelete={onDelete}
              onShowTopics={onShowTopics}
              selectedTopic={selectedTopic}
              topics={topics}
              existent={existent}
              actualTopic={actualTopic}
              setActualTopic={setActualTopic}
              visible={visible}
            />
          </View>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

TargetForm.propTypes = {
  onCreate: func.isRequired,
  onDelete: func.isRequired,
  onShowTopics: func.isRequired,
  onHide: func.isRequired,
  selectedTopic: oneOfType([TOPIC_SHAPE, bool]).isRequired,
  topics: oneOfType([arrayOf(TOPIC_SHAPE), bool]).isRequired,
  existent: oneOfType([TARGET_SHAPE, bool]).isRequired,
  visible: bool.isRequired,
};

export default TargetForm;
