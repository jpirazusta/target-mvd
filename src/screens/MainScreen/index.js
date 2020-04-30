import React, { useRef, useState, useCallback } from 'react';
import { object } from 'prop-types';
import { View, Image, Animated, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { MAIN_SCREEN, CHAT_SCREEN } from 'constants/screens';
import TargetForm from 'components/TargetForm';
import CreateTargetButton from 'components/CreateTargetButton';
import TopicPicker from 'components/TopicPicker';
import DeleteConfirmation from 'components/DeleteConfirmation';
import MatchModal from 'components/MatchModal';
import { LATITUDE_DELTA, LONGITUDE_DELTA, SCREEN_HEIGHT } from 'constants/common';
import useLocation from 'hooks/useLocation';
import useGetTargets from 'hooks/useGetTargets';
import useCreateTarget from 'hooks/useCreateTarget';
import useSelectTarget from 'hooks/useSelectTarget';
import TargetMarker from 'components/TargetMarker';
import useDeleteTarget from 'hooks/useDeleteTarget';
import locationMap from 'assets/images/locationMap.png';
import common from 'constants/commonStyles';
import { logout } from 'actions/userActions';
import { useDispatch } from 'react-redux';
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

const MainScreen = ({ navigation }) => {
  const location = useLocation();
  const { targets, topics, requestTargets } = useGetTargets();
  const [selectedTarget, setSelectedTarget] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [isMapRendered, setIsMapRendered] = useState(false);
  const mapView = useRef();
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const formPositionAnim = useRef(new Animated.Value(HIDDEN_VIEWS_POSITION)).current;
  const topicsPositionAnim = useRef(new Animated.Value(HIDDEN_VIEWS_POSITION)).current;

  const { onCreateTarget, onSelectTopic, topic, setTopic, createdTarget } = useCreateTarget({
    animate,
    location,
    requestTargets,
    formPositionAnim,
    topicsPositionAnim,
    setFormVisible,
    setShowMatch,
    HIDDEN_VIEWS_POSITION,
  });

  const onSelectTarget = useSelectTarget(
    isMapRendered,
    selectedTarget,
    location,
    coordsConstants,
    mapView,
    setSelectedTarget,
    animate,
    formPositionAnim,
    setFormVisible,
  );

  const hideTargetForm = useCallback(() => {
    setFormVisible(false);
    setSelectedTarget(false);
    setTopic(false);
    animate(formPositionAnim, HIDDEN_VIEWS_POSITION);
    mapView.current.animateToRegion({ ...location, ...coordsConstants });
  }, [formPositionAnim, location, setTopic]);

  const onDeleteTarget = useDeleteTarget(
    setShowDeleteConfirmation,
    requestTargets,
    setFormVisible,
    hideTargetForm,
  );

  const onStartChatting = useCallback(
    ({ matchedUser, matchConversation }) => {
      navigation.push(CHAT_SCREEN, { matchedUser, matchConversation });
    },
    [navigation],
  );

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <MapView
        ref={mapView}
        onLayout={() => setIsMapRendered(true)}
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
        <CreateTargetButton
          onPress={() => {
            setFormVisible(true);
            animate(formPositionAnim, 0);
          }}
        />
      </View>
      <Animated.View style={[common.animatedContainer, { bottom: formPositionAnim }]}>
        <TargetForm
          onCreate={target => {
            onCreateTarget(target);
            mapView.current.animateToRegion({ ...location, ...coordsConstants });
          }}
          onDelete={() => setShowDeleteConfirmation(true)}
          onShowTopics={() => animate(topicsPositionAnim, 0)}
          onHide={hideTargetForm}
          selectedTopic={topic}
          topics={topics}
          existent={selectedTarget}
          visible={formVisible}
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
      {showDeleteConfirmation && (
        <DeleteConfirmation
          target={selectedTarget}
          onDelete={onDeleteTarget}
          onHide={() => setShowDeleteConfirmation(false)}
        />
      )}
      {showMatch && (
        <MatchModal
          matchedUser={createdTarget.matchedUser}
          matchConversation={createdTarget.matchConversation}
          onHide={() => setShowMatch(false)}
          onStartChatting={onStartChatting}
        />
      )}
      <Button testID="logout-button" onPress={logoutRequest} title="SIGN OUT" />
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
