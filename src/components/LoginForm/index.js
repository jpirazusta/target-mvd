import React from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import loginValidations from 'validations/loginValidations';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import styles from './styles';

const FIELDS = {
  email: 'email',
  password: 'password',
};

const LoginForm = ({ onSubmit }) => {
  const { error, status } = useStatus(login);
  const validator = useValidation(loginValidations);
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
    <View style={styles.container}>
      <Input
        label={strings.SIGN_IN.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        invalid={error || errors.email}
        {...inputProps(FIELDS.email)}
      />
      <View style={styles.inputContainer}>
        <Input
          label={strings.SIGN_IN.password}
          testID="password-input"
          secureTextEntry
          invalid={error || errors.password}
          {...inputProps(FIELDS.password)}
        />
      </View>
      <ErrorView errors={{ ...errors, error }} />
      <Button
        testID="login-submit-button"
        handleOnPress={handleSubmit}
        additionalStyles={styles.button}
        title={strings.SIGN_IN.button}
        isLoading={status === LOADING}
      />
    </View>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
