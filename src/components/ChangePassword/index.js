import React from 'react';
import { Text } from 'react-native';
import { func } from 'prop-types';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import Modal from 'components/common/Modal';
import Input from 'components/common/Input';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import useChangePassword from 'hooks/useChangePassword';
import useForm from 'hooks/useForm';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import { BLACK } from 'constants/colors';
import styles from './styles';

const FIELDS = {
  currentPassword: 'currentPassword',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
};

const {
  PASSWORD: { currentLabel, newLabel, confirmLabel, success },
  COMMON: { done, cancel, ok },
} = strings;

const ChangePassword = ({ onHide }) => {
  const { onSubmit, validator, error, status, reset } = useChangePassword();

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
            label={currentLabel}
            error={errors[FIELDS.currentPassword]}
            invalid={error || errors[FIELDS.currentPassword]}
            {...inputProps(FIELDS.currentPassword)}
            secureTextEntry
            showErrorMessage
          />
          <Input
            label={newLabel}
            error={errors[FIELDS.password]}
            invalid={error || errors[FIELDS.password]}
            {...inputProps(FIELDS.password)}
            secureTextEntry
            showErrorMessage
          />
          <Input
            label={confirmLabel}
            error={errors[FIELDS.passwordConfirmation]}
            invalid={error || errors[FIELDS.passwordConfirmation]}
            {...inputProps(FIELDS.passwordConfirmation)}
            secureTextEntry
            showErrorMessage
          />
          <ErrorView errors={{ error }} />
          <Button
            handleOnPress={() => handleSubmit(values)}
            additionalStyles={styles.done}
            title={done}
            isLoading={status === LOADING}
          />
          <Button handleOnPress={onHide} title={cancel} titleColor={BLACK} />
        </>
      ) : (
        <>
          <Text style={styles.success}>{success}</Text>
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

ChangePassword.propTypes = {
  onHide: func.isRequired,
};

export default ChangePassword;
