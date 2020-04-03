import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'locale';
import { LOGIN_SCREEN } from 'constants/screens';
import Ovals from 'components/common/Ovals';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Ovals />
      <Text style={styles.welcome}>{strings.SIGN_IN.title}</Text>
      <LoginForm onSubmit={loginRequest} />
    </View>
  );
};

export default memo(LoginScreen);
