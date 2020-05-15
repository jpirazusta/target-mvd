import React from 'react';
import { View, Text } from 'react-native';
import { func } from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import Input from 'components/common/Input';
import ErrorView from 'components/common/ErrorView';
import Button from 'components/common/Button';
import SelectAvatar from 'components/SelectAvatar';
import useUpdateProfile from 'hooks/useUpdateProfile';
import useForm from 'hooks/useForm';
import useTextInputProps from 'hooks/useTextInputProps';
import useLogout from 'hooks/useLogout';
import strings from 'locale';
import { PROFILE_SHAPE } from 'constants/shapes';
import { BLACK } from 'constants/colors';
import styles from './styles';

const {
  PROFILE: { usernameLabel, firstNameLabel, lastNameLabel, button, success, changePassword },
} = strings;

const FIELDS = {
  username: 'username',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
};

const ProfileForm = ({ profile, onShowChangePassword }) => {
  const {
    id,
    username,
    firstName,
    lastName,
    email,
    avatar: { normalUrl },
  } = profile;
  const { setAvatarData, validator, onSubmit, error, status } = useUpdateProfile(id);
  const logoutRequest = useLogout();

  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true,
      initialValues: {
        username,
        firstName,
        lastName,
        email,
      },
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <SelectAvatar avatarUrl={normalUrl} setAvatarData={setAvatarData} />
      <Input
        label={usernameLabel}
        error={errors[FIELDS.username]}
        invalid={error || errors[FIELDS.username]}
        {...inputProps(FIELDS.username)}
        showErrorMessage
      />
      <Input
        label={strings.COMMON.email}
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors[FIELDS.email]}
        invalid={error || errors[FIELDS.email]}
        {...inputProps(FIELDS.email)}
        showErrorMessage
      />
      <Input
        label={firstNameLabel}
        error={errors[FIELDS.firstName]}
        invalid={error || errors[FIELDS.firstName]}
        {...inputProps(FIELDS.firstName)}
        showErrorMessage
      />
      <Input
        label={lastNameLabel}
        error={errors[FIELDS.lastName]}
        invalid={error || errors[FIELDS.lastName]}
        {...inputProps(FIELDS.lastName)}
        showErrorMessage
      />
      <Button handleOnPress={onShowChangePassword} title={changePassword} titleColor={BLACK} />
      <ErrorView errors={{ error }} />
      <Button
        handleOnPress={handleSubmit}
        additionalStyles={styles.saveButton}
        title={button}
        isLoading={status === LOADING}
      />
      <View style={styles.success}>
        {status === SUCCESS && <Text style={styles.successText}>{success}</Text>}
      </View>
      <Button
        handleOnPress={logoutRequest}
        title={strings.PROFILE.logout}
        titleColor={BLACK}
        additionalStyles={styles.logoutButton}
      />
    </KeyboardAwareScrollView>
  );
};

ProfileForm.propTypes = {
  profile: PROFILE_SHAPE.isRequired,
  onShowChangePassword: func.isRequired,
};

export default ProfileForm;
