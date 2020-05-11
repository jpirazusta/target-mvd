import React from 'react';
import { View, Text } from 'react-native';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import ProfileForm from 'components/ProfileForm';
import Loader from 'components/common/Loader';
import useGetProfile from 'hooks/useGetProfile';
import strings from 'locale';
import commonStyles from 'constants/commonStyles';

const ProfileScreen = () => {
  const { profile, error, status } = useGetProfile();

  return (
    <View style={[commonStyles.screenContainer, commonStyles.centerChilds]}>
      {status === LOADING && <Loader />}
      {status === SUCCESS && <ProfileForm profile={profile} />}
      {error && <Text>{strings.PROFILE.errorGet}</Text>}
    </View>
  );
};

export default ProfileScreen;
