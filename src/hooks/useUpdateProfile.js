import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
import useValidation from 'hooks/useValidation';
import profileValidations from 'validations/profileValidations';
import { updateProfile, updateProfileReset } from 'actions/userActions';

const useUpdateProfile = id => {
  const [avatarData, setAvatarData] = useState('');
  const dispatch = useDispatch();
  const validator = useValidation(profileValidations);

  useEffect(() => {
    dispatch(updateProfileReset());
  }, []);

  const onSubmit = useCallback(
    profile => {
      const profileData = avatarData ? { ...profile, avatar: avatarData } : profile;
      dispatch(updateProfile(id, profileData));
    },
    [avatarData, dispatch, id],
  );
  const { error, status } = useStatus(updateProfile);

  return { setAvatarData, validator, onSubmit, error, status };
};

export default useUpdateProfile;
