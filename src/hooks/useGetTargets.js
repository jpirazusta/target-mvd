import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTargets, getTopics } from 'actions/targetActions';

const useGetTargets = () => {
  const dispatch = useDispatch();
  const { targets, topics } = useSelector(({ target: { targets, topics } }) => ({
    targets,
    topics,
  }));
  const requestTopics = useCallback(() => {
    dispatch(getTopics());
  }, [dispatch]);
  const requestTargets = useCallback(() => {
    dispatch(getTargets());
  }, [dispatch]);
  useEffect(() => {
    requestTopics();
    requestTargets();
  }, [requestTargets, requestTopics]);

  return { targets, topics };
};

export default useGetTargets;
