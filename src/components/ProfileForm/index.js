import React, { useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Input from 'components/common/Input';
import SelectAvatar from 'components/SelectAvatar';
import strings from 'locale';
import { PROFILE_SHAPE } from 'constants/shapes';
import styles from './styles';

const {
  PROFILE: { usernameLabel, firstNameLabel, lastNameLabel },
} = strings;

const ProfileForm = ({ profile }) => {
  const [avatarData, setAvatarData] = useState('');
  const { username, firstName, lastName, email } = profile;
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Input label={usernameLabel} value={username} additionalStyles={styles.inputContainer} />
        <Input
          label={strings.SIGN_UP.email}
          keyboardType="email-address"
          autoCapitalize="none"
          additionalStyles={styles.inputContainer}
          value={email}
        />
        <Input label={firstNameLabel} value={firstName} additionalStyles={styles.inputContainer} />
        <Input label={lastNameLabel} value={lastName} additionalStyles={styles.inputContainer} />
        <SelectAvatar setAvatarData={setAvatarData} />
      </KeyboardAwareScrollView>
    </View>
  );
};

ProfileForm.propTypes = {
  profile: PROFILE_SHAPE.isRequired,
};

export default ProfileForm;
