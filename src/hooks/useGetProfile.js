import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
import useSession from 'hooks/useSession';
import { getProfile } from 'actions/userActions';

const useGetProfile = () => {
  const dispatch = useDispatch();
  const {
    user: { id },
  } = useSession();
  const requestProfile = useCallback(() => dispatch(getProfile(id)), [dispatch, id]);

  useEffect(() => {
    requestProfile();
  }, [requestProfile]);

  const { error, status } = useStatus(getProfile);
  const profile = useSelector(({ user: { profile } }) => profile);

  return { profile, error, status, id };
};

export default useGetProfile;
