import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import ProfileBackground from 'components/ProfileBackground';
import ProfileForm from 'components/ProfileForm';
import useProfile from 'hooks/useProfile';
import strings from 'locale';
import { BLACK } from 'constants/colors';
import common from 'constants/commonStyles';

const ProfileScreen = () => {
  const { profile, error, status } = useProfile();

  return (
    <View style={common.formContainer}>
      <ProfileBackground />
      {status === LOADING && <ActivityIndicator size="large" color={BLACK} />}
      {status === SUCCESS && <ProfileForm profile={profile} />}
      {error && <Text>{strings.PROFILE.errorGet}</Text>}
    </View>
  );
};

export default ProfileScreen;
