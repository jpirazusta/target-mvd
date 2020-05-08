import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';
import { logout } from 'actions/userActions';

const useLogout = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => {
    dispatch(logout());
    LoginManager.logOut();
  }, [dispatch]);

  return logoutRequest;
};

export default useLogout;
