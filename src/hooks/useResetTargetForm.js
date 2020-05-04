import { useState, useEffect } from 'react';

const useResetTargetForm = ({
  targetError,
  visible,
  initialValues,
  setValues,
  setActualTopic,
  setErrors,
  setTopicError,
}) => {
  const [networkError, setNetworkError] = useState(targetError);

  useEffect(() => {
    if (!visible) {
      setValues(initialValues);
      setActualTopic('');
      setErrors({});
      setTopicError(null);
      setNetworkError(null);
    }
  }, [initialValues, setActualTopic, setErrors, setTopicError, setValues, visible]);

  return networkError;
};

export default useResetTargetForm;
