import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';

import { changePassword, changePasswordReset } from 'actions/userActions';
import useValidation from 'hooks/useValidation';
import changePasswordValidations from 'validations/changePasswordValidations';

const useChangePassword = () => {
  const validator = useValidation(changePasswordValidations);
  const dispatch = useDispatch();
  const onSubmit = useCallback(password => dispatch(changePassword(password)), [dispatch]);
  const { error, status } = useStatus(changePassword);
  const reset = () => dispatch(changePasswordReset());

  return { onSubmit, validator, error, status, reset };
};

export default useChangePassword;
