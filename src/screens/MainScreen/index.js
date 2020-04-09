import React from 'react';
import { View, Text, Button } from 'react-native';

import { MAIN_SCREEN } from 'constants/screens';
import useLogout from 'hooks/useLogout';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './styles';

const MainScreen = () => {
  const { logoutRequest } = useLogout();

  const { user: email } = useSession();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <Text>Hey{` ${email}` || ''}, you&#39;re logged in!</Text>
      <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
