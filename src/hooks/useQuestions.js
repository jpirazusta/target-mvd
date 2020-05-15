import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';

import { sendQuestions, sendQuestionsReset } from 'actions/userActions';
import useValidation from 'hooks/useValidation';
import contactValidations from 'validations/contactValidations';

const useQuestions = () => {
  const validator = useValidation(contactValidations);
  const dispatch = useDispatch();
  const onSubmit = useCallback(questions => dispatch(sendQuestions(questions)), [dispatch]);
  const { error, status } = useStatus(sendQuestions);
  const reset = () => dispatch(sendQuestionsReset());

  return { onSubmit, validator, error, status, reset };
};

export default useQuestions;
