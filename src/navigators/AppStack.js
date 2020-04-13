import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import strings from 'locale';

import { MAIN_SCREEN } from 'constants/screens';

import MainScreen from 'screens/MainScreen';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={MAIN_SCREEN}
      component={MainScreen}
      options={{ title: strings.MAIN_SCREEN.title }}
    />
  </Stack.Navigator>
);

export default AppStack;
