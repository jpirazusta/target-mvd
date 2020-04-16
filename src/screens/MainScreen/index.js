import React from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { MAIN_SCREEN } from 'constants/screens';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from 'constants/common';
import useLogout from 'hooks/useLogout';
import useLocation from 'hooks/useLocation';
import useGetTargets from 'hooks/useGetTargets';
import strings from 'locale';
import useSession from 'hooks/useSession';
import CustomMarker from 'components/CustomMarker';
import styles from './styles';

const MainScreen = () => {
  const { logoutRequest } = useLogout();
  const { user: email } = useSession();
  const { location } = useLocation();
  const { targets, topics } = useGetTargets();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          ...location,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showUserLocation>
        {topics &&
          targets.map(({ target: { id, lat, lng, topicId } }) => (
            <CustomMarker key={id} lat={lat} lng={lng} topicId={topicId} />
          ))}
      </MapView>
      <View style={styles.newTarget}>
        <Text>Hey{` ${email}` || ''}, you&#39;re logged in!</Text>
        <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />
      </View>
    </View>
  );
};

export default MainScreen;
