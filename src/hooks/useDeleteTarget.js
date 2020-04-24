import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import { deleteTarget } from 'actions/targetActions';

const useDeleteTarget = (setShowDeleteConfirmation, requestTargets, hideTargetForm) => {
  const { status } = useStatus(deleteTarget);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === SUCCESS) {
      setShowDeleteConfirmation(false);
      requestTargets();
      hideTargetForm();
    }
  }, [status, hideTargetForm, requestTargets, setShowDeleteConfirmation]);

  const onDeleteTarget = useCallback(
    targetId => {
      dispatch(deleteTarget(targetId));
    },
    [dispatch],
  );

  return onDeleteTarget;
};

export default useDeleteTarget;
