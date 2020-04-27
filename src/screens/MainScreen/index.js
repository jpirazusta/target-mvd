import React, { useRef, useState } from 'react';
import { View, Image, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { MAIN_SCREEN } from 'constants/screens';
import TargetForm from 'components/TargetForm';
import CreateTargetButton from 'components/CreateTargetButton';
import TopicPicker from 'components/TopicPicker';
import { LATITUDE_DELTA, LONGITUDE_DELTA, SCREEN_HEIGHT } from 'constants/common';
import useLocation from 'hooks/useLocation';
import useGetTargets from 'hooks/useGetTargets';
import useCreateTarget from 'hooks/useCreateTarget';
import useSelectTarget from 'hooks/useSelectTarget';
import TargetMarker from 'components/TargetMarker';
import locationMap from 'assets/images/locationMap.png';
import common from 'constants/commonStyles';
import styles from './styles';

const HIDDEN_VIEWS_POSITION = SCREEN_HEIGHT * -1;
const ANIMATIONS_DURATION = 500;
const coordsConstants = {
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const animate = (animatedValue, toValue) => {
  Animated.timing(animatedValue, {
    toValue,
    duration: ANIMATIONS_DURATION,
  }).start();
};

const MainScreen = () => {
  const location = useLocation();
  const { targets, topics, requestTargets } = useGetTargets();
  const [selectedTarget, setSelectedTarget] = useState(false);
  const mapView = useRef();

  const formPositionAnim = useRef(new Animated.Value(HIDDEN_VIEWS_POSITION)).current;
  const topicsPositionAnim = useRef(new Animated.Value(HIDDEN_VIEWS_POSITION)).current;

  const { onCreateTarget, onSelectTopic, topic } = useCreateTarget(
    animate,
    location,
    requestTargets,
    formPositionAnim,
    topicsPositionAnim,
    HIDDEN_VIEWS_POSITION,
  );

  const onSelectTarget = useSelectTarget(
    selectedTarget,
    location,
    coordsConstants,
    mapView,
    setSelectedTarget,
    animate,
    formPositionAnim,
  );

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...location,
          ...coordsConstants,
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
      <View style={styles.newTarget}>
        <CreateTargetButton onPress={() => animate(formPositionAnim, 0)} />
      </View>
      <Animated.View style={[common.animatedContainer, { bottom: formPositionAnim }]}>
        <TargetForm
          onCreate={target => {
            onCreateTarget(target);
            mapView.current.animateToRegion({ ...location, ...coordsConstants });
          }}
          onShowTopics={() => animate(topicsPositionAnim, 0)}
          onHide={() => {
            setSelectedTarget(false);
            animate(formPositionAnim, HIDDEN_VIEWS_POSITION);
            mapView.current.animateToRegion({ ...location, ...coordsConstants });
          }}
          selectedTopic={topic}
          topics={topics}
          existent={selectedTarget}
        />
      </Animated.View>
      {topics && (
        <Animated.View style={[common.animatedContainer, { bottom: topicsPositionAnim }]}>
          <TopicPicker
            topics={topics}
            onHide={() => animate(topicsPositionAnim, HIDDEN_VIEWS_POSITION)}
            onSelectTopic={onSelectTopic}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default MainScreen;
