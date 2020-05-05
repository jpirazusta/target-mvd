/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import strings from 'locale';

import { MAIN_SCREEN, CHAT_SCREEN, CONVERSATIONS_SCREEN } from 'constants/screens';

import MainScreen from 'screens/MainScreen';
import ChatScreen from 'screens/ChatScreen';
import ConversationsScreen from 'screens/ConversationsScreen';
import backIcon from 'assets/images/backIcon.png';
import conversationsIcon from 'assets/images/conversationsIcon.png';
import locationIcon from 'assets/images/locationIcon.png';
import { BLACK } from 'constants/colors';
import styles from './styles';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={MAIN_SCREEN}
      component={MainScreen}
      options={({ navigation }) => ({
        title: strings.MAIN_SCREEN.title,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.push(CONVERSATIONS_SCREEN)}
            style={styles.rightButton}>
            <Image source={conversationsIcon} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name={CHAT_SCREEN}
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerTintColor: BLACK,
        headerBackTitle: ' ',
        headerBackImage: () => <Image source={backIcon} style={styles.backButtonMargin} />,
      })}
    />
    <Stack.Screen
      name={CONVERSATIONS_SCREEN}
      component={ConversationsScreen}
      options={({ navigation }) => ({
        title: strings.CHAT.title,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.pop()} style={styles.rightButton}>
            <Image source={locationIcon} />
          </TouchableOpacity>
        ),
        headerLeft: null,
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
