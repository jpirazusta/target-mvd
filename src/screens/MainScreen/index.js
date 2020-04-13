import React from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { MAIN_SCREEN } from 'constants/screens';
import useLogout from 'hooks/useLogout';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './styles';

const MainScreen = () => {
  const { logoutRequest } = useLogout();

  const { user: email } = useSession();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showUserLocation
      />
      <View style={styles.newTarget}>
        <Text>Hey{` ${email}` || ''}, you&#39;re logged in!</Text>
        <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />
      </View>
    </View>
  );
};

export default MainScreen;
