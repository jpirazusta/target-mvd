import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { LOADING } from '@rootstrap/redux-tools';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import ErrorView from 'components/common/ErrorView';
import { login } from 'actions/userActions';
import useFacebook from 'hooks/useFacebook';
import strings from 'locale';
import { LOGIN_SCREEN, SIGN_UP_SCREEN } from 'constants/screens';
import Ovals from 'components/common/Ovals';
import styles from './styles';

const {
  COMMON: { title, loading },
  FACEBOOK: { buttonTitle },
  SIGN_UP,
} = strings;

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  const { error, status, facebookError, handleFacebookLogin } = useFacebook();

  return (
    <SafeAreaView style={styles.container} testID={LOGIN_SCREEN}>
      <Ovals />
      <Text style={styles.welcome}>{title}</Text>
      <LoginForm onSubmit={loginRequest} />
      <TouchableOpacity
        testID="facebook-button"
        onPress={handleFacebookLogin}
        style={styles.facebookButton}>
        <Text style={styles.facebookButtonText}>{status === LOADING ? loading : buttonTitle}</Text>
      </TouchableOpacity>
      <ErrorView errors={{ facebookError, error }} />
      <TouchableOpacity testID="sign-up-button" onPress={handleLogin} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>{SIGN_UP.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(LoginScreen);
