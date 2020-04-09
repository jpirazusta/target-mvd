import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { facebookLogin } from 'actions/userActions';
import strings from 'locale';
import { FACEBOOK_PERMISSIONS } from 'constants/common';

const useFacebook = () => {
  const { error, status } = useStatus(facebookLogin);
  const [facebookError, setFacebookError] = useState('');
  const dispatch = useDispatch();
  const performFacebookLogin = useCallback(accessToken => dispatch(facebookLogin(accessToken)), [
    dispatch,
  ]);
  const handleFacebookLogin = async () => {
    try {
      const login = await LoginManager.logInWithPermissions(FACEBOOK_PERMISSIONS);
      if (!login.isCancelled) {
        const { accessToken } = await AccessToken.getCurrentAccessToken();
        performFacebookLogin(accessToken.toString());
      }
    } catch {
      setFacebookError(`${strings.FACEBOOK.facebookError} ${error}`);
    }
  };

  return {
    error,
    status,
    facebookError,
    handleFacebookLogin,
  };
};

export default useFacebook;
