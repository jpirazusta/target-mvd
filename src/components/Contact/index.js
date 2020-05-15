import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { func } from 'prop-types';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import Modal from 'components/common/Modal';
import Input from 'components/common/Input';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import useQuestions from 'hooks/useQuestions';
import useForm from 'hooks/useForm';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import { IS_ANDROID } from 'constants/common';
import { BLACK } from 'constants/colors';
import commonStyles from 'constants/commonStyles';
import styles from './styles';

const FIELDS = {
  email: 'email',
  body: 'body',
};

const {
  CONTACT: { questionsLabel, send, success },
  COMMON: { email, cancel, ok },
} = strings;

const Contact = ({ onHide }) => {
  const { onSubmit, validator, error, status, reset } = useQuestions();

  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <Modal>
      {status !== SUCCESS ? (
        <>
          <Input
            label={email}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors[FIELDS.email]}
            invalid={error || errors[FIELDS.email]}
            {...inputProps(FIELDS.email)}
            showErrorMessage
          />
          <Text style={styles.label}>{questionsLabel}</Text>
          <View style={commonStyles.alignCenter}>
            <TextInput
              style={[
                styles.input,
                (error || errors[FIELDS.body]) && commonStyles.inputBorderError,
                IS_ANDROID && styles.textAlingVertical,
              ]}
              {...inputProps(FIELDS.body)}
              multiline
            />
            <View style={styles.errorContainer}>
              {errors[FIELDS.body] && <Text style={styles.error}>{errors[FIELDS.body]}</Text>}
            </View>
          </View>
          <ErrorView errors={{ error }} />
          <Button
            handleOnPress={() => handleSubmit(values)}
            additionalStyles={styles.save}
            title={send}
            isLoading={status === LOADING}
          />
          <Button
            handleOnPress={() => {
              reset();
              onHide();
            }}
            title={cancel}
            titleColor={BLACK}
          />
        </>
      ) : (
        <>
          <Text style={commonStyles.successText}>{success}</Text>
          <Button
            handleOnPress={() => {
              reset();
              onHide();
            }}
            additionalStyles={styles.okButton}
            title={ok}
          />
        </>
      )}
    </Modal>
  );
};

Contact.propTypes = {
  onHide: func.isRequired,
};

export default Contact;
