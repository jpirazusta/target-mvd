import React, { useRef, useState } from 'react';
import { object } from 'prop-types';
import { View, Image, Animated, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { MAIN_SCREEN } from 'constants/screens';
import CreateTarget from 'components/CreateTarget';
import { DELTA_COORDS, HIDDEN_VIEWS_POSITION } from 'constants/common';
import useLocation from 'hooks/useLocation';
import useGetTargets from 'hooks/useGetTargets';
import useSelectTarget from 'hooks/useSelectTarget';
import TargetMarker from 'components/TargetMarker';
import { animate } from 'utils/helpers';
import locationMap from 'assets/images/locationMap.png';
import styles from './styles';

const MainScreen = ({ navigation }) => {
  const location = useLocation();
  const { targets, topics, requestTargets } = useGetTargets();
  const [selectedTarget, setSelectedTarget] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [isMapRendered, setIsMapRendered] = useState(false);
  const mapView = useRef();

  const formPositionAnim = useRef(new Animated.Value(HIDDEN_VIEWS_POSITION)).current;
  const topicsPositionAnim = useRef(new Animated.Value(HIDDEN_VIEWS_POSITION)).current;

  const onSelectTarget = useSelectTarget(
    isMapRendered,
    selectedTarget,
    location,
    mapView,
    setSelectedTarget,
    animate,
    formPositionAnim,
    setFormVisible,
  );

  return (
    <SafeAreaView style={styles.container} testID={MAIN_SCREEN}>
      <MapView
        ref={mapView}
        onLayout={() => setIsMapRendered(true)}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...location,
          ...DELTA_COORDS,
        }}
        showUserLocation
        followUserLocation>
        {topics &&
          targets.map(({ target: { id, lat, lng, topicId } }) => (
            <TargetMarker
              key={id}
              id={id.toString()}
              lat={lat}
              lng={lng}
              topicId={topicId}
              onPress={() => onSelectTarget(id, targets)}
              selected={selectedTarget?.id === id}
            />
          ))}
        <Marker coordinate={location} style={styles.marker}>
          <Image source={locationMap} style={styles.markerImage} />
          <View style={styles.markerCircle} />
        </Marker>
      </MapView>
      <CreateTarget
        navigation={navigation}
        formPositionAnim={formPositionAnim}
        topicsPositionAnim={topicsPositionAnim}
        location={location}
        requestTargets={requestTargets}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        mapView={mapView}
        topics={topics}
        selectedTarget={selectedTarget}
        setSelectedTarget={setSelectedTarget}
      />
    </SafeAreaView>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
