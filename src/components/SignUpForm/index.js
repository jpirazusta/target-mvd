import React from 'react';
import { func } from 'prop-types';
import { View } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Dropdown from 'components/Dropdown';
import ErrorView from 'components/common/ErrorView';
import CustomButton from 'components/common/CustomButton';
import { signUp } from 'actions/userActions';
import Input from 'components/common/Input';
import strings from 'locale';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import useTextInputProps from 'hooks/useTextInputProps';
import signUpValidations from 'validations/signUpValidations';
import commonStyles from 'constants/commonStyles';
import styles from './styles';

const FIELDS = {
  name: 'name',
  email: 'email',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
  gender: 'gender',
};

const {
  SIGN_UP: { name, passwordPlaceholder, passwordConfirmation, gender, button },
  COMMON: { email, password },
  GENDER: { options, placeholder },
} = strings;

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
          label={name}
          testID="name-input"
          error={errors[FIELDS.name]}
          invalid={error || errors[FIELDS.name]}
          {...inputProps(FIELDS.name)}
          showErrorMessage
        />
        <Input
          label={email}
          keyboardType="email-address"
          autoCapitalize="none"
          testID="email-input"
          error={errors[FIELDS.email]}
          invalid={error || errors[FIELDS.email]}
          {...inputProps(FIELDS.email)}
          showErrorMessage
        />
        <Input
          label={password}
          placeholder={passwordPlaceholder}
          secureTextEntry
          testID="password-input"
          error={errors[FIELDS.password]}
          invalid={error || errors[FIELDS.password]}
          {...inputProps(FIELDS.password)}
          showErrorMessage
        />
        <Input
          label={passwordConfirmation}
          secureTextEntry
          testID="confirm-password-input"
          error={errors[FIELDS.passwordConfirmation]}
          invalid={error || errors[FIELDS.passwordConfirmation]}
          {...inputProps(FIELDS.passwordConfirmation)}
          showErrorMessage
        />
        <View style={commonStyles.shortInputWidth}>
          <Dropdown
            label={gender}
            testID="gender-input"
            items={options}
            error={errors[FIELDS.gender]}
            invalid={error || errors[FIELDS.gender]}
            placeholder={placeholder}
            {...inputProps(FIELDS.gender)}
            showErrorMessage
          />
        </View>
        <ErrorView errors={{ error }} />
        <CustomButton
          testID="signup-submit-button"
          handleOnPress={handleSubmit}
          additionalStyles={styles.button}
          title={button}
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
