import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTargetReset } from 'actions/targetActions';

const useResetTargetForm = ({
  visible,
  initialValues,
  setValues,
  setActualTopic,
  setErrors,
  setTopicError,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!visible) {
      setValues(initialValues);
      setActualTopic('');
      setErrors({});
      setTopicError(null);
      dispatch(createTargetReset());
    }
  }, [dispatch, initialValues, setActualTopic, setErrors, setTopicError, setValues, visible]);
};

export default useResetTargetForm;
