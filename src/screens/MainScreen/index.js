import React, { useRef } from 'react';
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
import CustomMarker from 'components/CustomMarker';
import locationMap from 'assets/images/locationMap.png';
import common from 'constants/commonStyles';
import styles from './styles';

const HIDDEN_VIEWS_POSITION = SCREEN_HEIGHT * -1;
const ANIMATIONS_DURATION = 500;

const animate = (animatedValue, toValue) => {
  Animated.timing(animatedValue, {
    toValue,
    duration: ANIMATIONS_DURATION,
  }).start();
};

const MainScreen = () => {
  const location = useLocation();
  const { targets, topics, requestTargets } = useGetTargets();

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
          onSubmit={onCreateTarget}
          onShowTopics={() => animate(topicsPositionAnim, 0)}
          onHide={() => animate(formPositionAnim, HIDDEN_VIEWS_POSITION)}
          topic={topic}
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
