import React from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Dropdown from 'components/Dropdown';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import { signUp } from 'actions/userActions';
import Input from 'components/common/Input';
import strings from 'locale';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import useTextInputProps from 'hooks/useTextInputProps';
import signUpValidations from 'validations/signUpValidations';
import common from 'constants/commonStyles';
import styles from './styles';

const FIELDS = {
  name: 'name',
  email: 'email',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
  gender: 'gender',
};

const SignUpForm = ({ onSubmit }) => {
  const { error, status } = useStatus(signUp);
  const validator = useValidation(signUpValidations);
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
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Input
          label={strings.SIGN_UP.name}
          testID="name-input"
          error={errors[FIELDS.name]}
          invalid={error || errors[FIELDS.name]}
          {...inputProps(FIELDS.name)}
          showErrorMessage
        />
        <Input
          label={strings.SIGN_UP.email}
          keyboardType="email-address"
          autoCapitalize="none"
          testID="email-input"
          error={errors[FIELDS.email]}
          invalid={error || errors[FIELDS.email]}
          {...inputProps(FIELDS.email)}
          showErrorMessage
        />
        <Input
          label={strings.SIGN_UP.password}
          placeholder={strings.SIGN_UP.passwordPlaceholder}
          secureTextEntry
          testID="password-input"
          error={errors[FIELDS.password]}
          invalid={error || errors[FIELDS.password]}
          {...inputProps(FIELDS.password)}
          showErrorMessage
        />
        <Input
          label={strings.SIGN_UP.passwordConfirmation}
          secureTextEntry
          testID="confirm-password-input"
          error={errors[FIELDS.passwordConfirmation]}
          invalid={error || errors[FIELDS.passwordConfirmation]}
          {...inputProps(FIELDS.passwordConfirmation)}
          showErrorMessage
        />
        <View style={common.shortInputWidth}>
          <Dropdown
            label={strings.SIGN_UP.gender}
            testID="gender-input"
            items={strings.GENDER.options}
            error={errors[FIELDS.gender]}
            invalid={error || errors[FIELDS.gender]}
            placeholder={strings.GENDER.placeholder}
            {...inputProps(FIELDS.gender)}
            showErrorMessage
          />
        </View>
        <ErrorView errors={{ error }} />
        <Button
          testID="signup-submit-button"
          handleOnPress={handleSubmit}
          additionalStyles={styles.button}
          title={strings.SIGN_UP.button}
          isLoading={status === LOADING}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUpForm;
