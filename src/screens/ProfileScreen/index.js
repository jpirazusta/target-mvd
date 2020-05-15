import React, { useState, useLayoutEffect } from 'react';
import { object } from 'prop-types';
import { SafeAreaView, Text } from 'react-native';
import { LOADING, SUCCESS } from '@rootstrap/redux-tools';

import ProfileForm from 'components/ProfileForm';
import ChangePassword from 'components/ChangePassword';
import Contact from 'components/Contact';
import Loader from 'components/common/Loader';
import HeaderButton from 'components/common/HeaderButton';
import useGetProfile from 'hooks/useGetProfile';
import strings from 'locale';
import commonStyles from 'constants/commonStyles';

const { PROFILE, CONTACT } = strings;

const ProfileScreen = ({ navigation }) => {
  const { profile, error, status } = useGetProfile();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-multi-comp
      headerLeft: () => (
        <HeaderButton
          onPress={() => setShowContact(true)}
          title={CONTACT.button}
          style={commonStyles.leftButton}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={[commonStyles.screenContainer, commonStyles.centerChilds]}>
      {status === LOADING && <Loader />}
      {status === SUCCESS && (
        <ProfileForm profile={profile} onShowChangePassword={() => setShowChangePassword(true)} />
      )}
      {error && <Text>{PROFILE.errorGet}</Text>}
      {showChangePassword && <ChangePassword onHide={() => setShowChangePassword(false)} />}
      {showContact && <Contact onHide={() => setShowContact(false)} />}
    </SafeAreaView>
  );
};

ProfileScreen.propTypes = {
  navigation: object.isRequired,
};

export default ProfileScreen;
