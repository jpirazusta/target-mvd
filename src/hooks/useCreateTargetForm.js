import { useState, useEffect } from 'react';
import { useStatus } from '@rootstrap/redux-tools';

import { createTarget, getTopics } from 'actions/targetActions';
import strings from 'locale';

const useCreateTargetForm = (topic, emptyTopic, handleSubmit) => {
  const { error, status: targetStatus } = useStatus(createTarget);
  const { error: getTopicsError, status: getTopicsStatus } = useStatus(getTopics);
  const [topicError, setTopicError] = useState();
  const targetError = error ? strings.TARGET.maximumTargetsError : '';

  useEffect(() => {
    setTopicError(null);
  }, [topic]);

  const handleOnPress = () => {
    topic ? setTopicError(null) : setTopicError(emptyTopic);
    handleSubmit();
  };

  return {
    handleOnPress,
    targetError,
    targetStatus,
    getTopicsError,
    getTopicsStatus,
    topicError,
    setTopicError,
  };
};

export default useCreateTargetForm;
