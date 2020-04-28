import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import strings from 'locale';

import { MAIN_SCREEN, CHAT_SCREEN } from 'constants/screens';

import MainScreen from 'screens/MainScreen';
import ChatScreen from 'screens/ChatScreen';
import back from 'assets/images/back.png';
import { BLACK } from 'constants/colors';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={MAIN_SCREEN}
      component={MainScreen}
      options={{ title: strings.MAIN_SCREEN.title }}
    />
    <Stack.Screen
      name={CHAT_SCREEN}
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.matchedUser.fullName,
        headerTintColor: BLACK,
        headerBackTitle: ' ',
        // eslint-disable-next-line react/no-multi-comp
        headerBackImage: () => <Image source={back} style={{ marginLeft: 18 }} />,
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
