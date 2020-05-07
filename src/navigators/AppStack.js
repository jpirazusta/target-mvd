/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import strings from 'locale';

import { MAIN_SCREEN, CHAT_SCREEN, CONVERSATIONS_SCREEN } from 'constants/screens';

import MainScreen from 'screens/MainScreen';
import ChatScreen from 'screens/ChatScreen';
import ConversationsScreen from 'screens/ConversationsScreen';
import HeaderButton from 'components/common/HeaderButton';
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
          <HeaderButton
            onPress={() => navigation.navigate(CONVERSATIONS_SCREEN)}
            icon={conversationsIcon}
            style={styles.rightButton}
          />
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
          <HeaderButton
            onPress={() => navigation.pop()}
            icon={locationIcon}
            style={styles.rightButton}
          />
        ),
        headerLeft: null,
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
