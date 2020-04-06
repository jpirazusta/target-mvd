import React, { memo, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { object } from 'prop-types';

import SignUpForm from 'components/SignUpForm';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { signUp } from 'actions/userActions';
import Ovals from 'components/common/Ovals';
import strings from 'locale';
import styles from './styles';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);

  return (
    <View style={styles.container} testID={SIGN_UP_SCREEN}>
      <Ovals />
      <Text style={styles.welcome}>{strings.COMMON.title}</Text>
      <SignUpForm onSubmit={signUpRequest} />
      <TouchableOpacity
        testID="sign-up-button"
        onPress={() => navigation.goBack()}
        style={styles.signinButton}>
        <Text style={styles.signinButtonText}>{strings.SIGN_IN.title}</Text>
      </TouchableOpacity>
    </View>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

SignUpScreen.navigationOptions = {
  title: strings.SIGN_UP.title,
};

export default SignUpScreen;
