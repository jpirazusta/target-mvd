import { useEffect } from 'react';
import find from 'lodash/find';

import { LOADING } from '@rootstrap/redux-tools';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import createTargetValidations from 'validations/createTargetValidations';
import useCreateTargetForm from 'hooks/useCreateTargetForm';
import useTextInputProps from 'hooks/useTextInputProps';
import useResetTargetForm from 'hooks/useResetTargetForm';

const useTargetForm = ({
  existent,
  topics,
  setActualTopic,
  onCreate,
  selectedTopic,
  emptyTopic,
  FIELDS,
  topicsError,
  loadingTopics,
  topicPlaceholder,
  visible,
  initialValues,
}) => {
  const validator = useValidation(createTargetValidations);

  useEffect(() => {
    if (existent) {
      const {
        topic: { label },
      } = find(topics, ({ topic: { id } }) => id === existent.topicId);
      setActualTopic(label);
    }
  }, [existent, setActualTopic, topics]);

  const {
    values,
    setValues,
    setErrors,
    errors,
    handleValueChange,
    handleSubmit,
    handleBlur,
  } = useForm(
    {
      onSubmit: onCreate,
      validator,
      validateOnBlur: true,
    },
    [onCreate],
  );

  const {
    handleOnPress,
    targetError,
    targetStatus,
    getTopicsError,
    getTopicsStatus,
    topicError,
    setTopicError,
  } = useCreateTargetForm(selectedTopic, emptyTopic, handleSubmit);

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);
  const areaInputProps = { ...inputProps(FIELDS.areaLength) };
  const titleInputProps = { ...inputProps(FIELDS.title) };

  const topicText = () => {
    if (getTopicsError) return topicsError;
    if (getTopicsStatus === LOADING) return loadingTopics;
    return (selectedTopic && selectedTopic.label) || topicPlaceholder;
  };

  useResetTargetForm({
    visible,
    initialValues,
    setValues,
    setActualTopic,
    setErrors,
    setTopicError,
  });

  return {
    values,
    setValues,
    setErrors,
    errors,
    handleOnPress,
    targetError,
    targetStatus,
    topicError,
    areaInputProps,
    titleInputProps,
    topicText,
  };
};

export default useTargetForm;
