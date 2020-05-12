import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import ProfileForm from 'components/ProfileForm';
import ChangePassword from 'components/ChangePassword';
import Loader from 'components/common/Loader';
import useGetProfile from 'hooks/useGetProfile';
import strings from 'locale';
import commonStyles from 'constants/commonStyles';

const ProfileScreen = () => {
  const { profile, error, status } = useGetProfile();
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <View style={[commonStyles.screenContainer, commonStyles.centerChilds]}>
      {status === LOADING && <Loader />}
      {status === SUCCESS && (
        <ProfileForm profile={profile} onShowChangePassword={() => setShowChangePassword(true)} />
      )}
      {error && <Text>{strings.PROFILE.errorGet}</Text>}
      {showChangePassword && <ChangePassword onHide={() => setShowChangePassword(false)} />}
    </View>
  );
};

export default ProfileScreen;
