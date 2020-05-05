import React, { useState, useCallback } from 'react';
import { View, Animated } from 'react-native';
import { func, object, bool, arrayOf, oneOfType } from 'prop-types';

import TargetForm from 'components/TargetForm';
import TopicPicker from 'components/TopicPicker';
import DeleteConfirmation from 'components/DeleteConfirmation';
import MatchModal from 'components/MatchModal';
import CreateTargetButton from 'components/CreateTargetButton';
import useCreateTarget from 'hooks/useCreateTarget';
import useDeleteTarget from 'hooks/useDeleteTarget';
import { animate } from 'utils/helpers';
import { CHAT_SCREEN } from 'constants/screens';
import { HIDDEN_VIEWS_POSITION, DELTA_COORDS } from 'constants/common';
import { LOCATION_SHAPE, TOPIC_SHAPE_LONG, TARGET_SHAPE } from 'constants/shapes';
import common from 'constants/commonStyles';
import styles from './styles';

const CreateTarget = ({
  navigation,
  formPositionAnim,
  location,
  requestTargets,
  topicsPositionAnim,
  formVisible,
  setFormVisible,
  mapView,
  topics,
  selectedTarget,
  setSelectedTarget,
}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

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

  const hideTargetForm = useCallback(() => {
    setFormVisible(false);
    setSelectedTarget(false);
    setTopic(false);
    animate(formPositionAnim, HIDDEN_VIEWS_POSITION);
    mapView.current.animateToRegion({ ...location, ...DELTA_COORDS });
  }, [formPositionAnim, location, mapView, setFormVisible, setSelectedTarget, setTopic]);

  const onDeleteTarget = useDeleteTarget(
    setShowDeleteConfirmation,
    requestTargets,
    setFormVisible,
    hideTargetForm,
  );

  const onStartChatting = useCallback(
    (fullName, matchId) => {
      setShowMatch(false);
      navigation.push(CHAT_SCREEN, { userName: fullName, matchId });
    },
    [navigation],
  );

  const { matchedUser, matchConversation } = createdTarget;

  return (
    <>
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
            mapView.current.animateToRegion({ ...location, ...DELTA_COORDS });
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
          matchedUser={matchedUser}
          onHide={() => setShowMatch(false)}
          onStartChatting={() => onStartChatting(matchedUser.fullName, matchConversation.id)}
        />
      )}
    </>
  );
};

CreateTarget.propTypes = {
  navigation: object.isRequired,
  formPositionAnim: object.isRequired,
  location: LOCATION_SHAPE.isRequired,
  requestTargets: func.isRequired,
  topicsPositionAnim: object.isRequired,
  formVisible: bool.isRequired,
  setFormVisible: func.isRequired,
  mapView: object.isRequired,
  topics: oneOfType([bool, arrayOf(TOPIC_SHAPE_LONG)]).isRequired,
  selectedTarget: oneOfType([bool, TARGET_SHAPE]).isRequired,
  setSelectedTarget: func.isRequired,
};

export default CreateTarget;
