import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';

import { createTarget } from 'actions/targetActions';

const useCreateTarget = (
  animate,
  location,
  requestTargets,
  formPositionAnim,
  topicsPositionAnim,
  HIDDEN_VIEWS_POSITION,
) => {
  const dispatch = useDispatch();
  const { status: targetStatus } = useStatus(createTarget);
  const [topic, setTopic] = useState(false);

  useEffect(() => {
    if (targetStatus === SUCCESS) {
      requestTargets();
      animate(formPositionAnim, HIDDEN_VIEWS_POSITION);
    }
  }, [HIDDEN_VIEWS_POSITION, animate, formPositionAnim, requestTargets, targetStatus]);

  const onCreateTarget = useCallback(
    ({ title, areaLength }) => {
      const newTarget = {
        lat: location.latitude,
        lng: location.longitude,
        title,
        radius: areaLength,
        topicId: topic.id,
      };
      dispatch(createTarget(newTarget));
    },
    [dispatch, location, topic.id],
  );

  const onSelectTopic = (id, label) => {
    setTopic({ id, label });
    animate(topicsPositionAnim, HIDDEN_VIEWS_POSITION);
  };

  return { onCreateTarget, onSelectTopic, topic };
};

export default useCreateTarget;
