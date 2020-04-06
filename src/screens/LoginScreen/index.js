import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'locale';
import { LOGIN_SCREEN, SIGN_UP_SCREEN } from 'constants/screens';
import Ovals from 'components/common/Ovals';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Ovals />
      <Text style={styles.welcome}>{strings.COMMON.title}</Text>
      <LoginForm onSubmit={loginRequest} />
      <TouchableOpacity testID="sign-up-button" onPress={handleLogin} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>{strings.SIGN_UP.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(LoginScreen);
