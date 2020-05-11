import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
import useSession from 'hooks/useSession';
import { getProfile } from 'actions/userActions';

const useProfile = () => {
  const dispatch = useDispatch();
  const {
    user: { id },
  } = useSession();

  useEffect(() => {
    dispatch(getProfile(id));
  }, []);

  const { error, status } = useStatus(getProfile);
  const profile = useSelector(({ user: { profile } }) => profile);

  return { profile, error, status };
};

export default useProfile;
