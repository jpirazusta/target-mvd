/* eslint-disable react/no-multi-comp */
import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import strings from 'locale';

import { MAIN_SCREEN, CHAT_SCREEN, CONVERSATIONS_SCREEN, PROFILE_SCREEN } from 'constants/screens';

import MainScreen from 'screens/MainScreen';
import ChatScreen from 'screens/ChatScreen';
import ConversationsScreen from 'screens/ConversationsScreen';
import HeaderButton from 'components/common/HeaderButton';
import ProfileScreen from 'screens/ProfileScreen';
import backIcon from 'assets/images/backIcon.png';
import conversationsIcon from 'assets/images/conversationsIcon.png';
import locationIcon from 'assets/images/locationIcon.png';
import profileIcon from 'assets/images/profileIcon.png';
import rightArrow from 'assets/images/rightArrow.png';
import { BLACK } from 'constants/colors';
import commonStyles from 'constants/commonStyles';
import styles from './styles';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen
      name={MAIN_SCREEN}
      component={MainScreen}
      options={({ navigation }) => ({
        title: strings.MAIN_SCREEN.title,
        headerRight: () => (
          <HeaderButton
            onPress={() => navigation.navigate(CONVERSATIONS_SCREEN)}
            icon={conversationsIcon}
            style={[commonStyles.headerButton, styles.rightButton]}
          />
        ),
        headerLeft: () => (
          <HeaderButton
            onPress={() => navigation.navigate(PROFILE_SCREEN)}
            icon={profileIcon}
            style={[commonStyles.headerButton, styles.leftButton]}
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
        headerBackImage: () => (
          <View style={[commonStyles.headerButton, styles.leftButton]}>
            <Image source={backIcon} />
          </View>
        ),
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
            style={[commonStyles.headerButton, styles.rightButton]}
          />
        ),
        headerLeft: () => (
          <HeaderButton
            onPress={() => navigation.navigate(PROFILE_SCREEN)}
            icon={profileIcon}
            style={[commonStyles.headerButton, styles.leftButton]}
          />
        ),
      })}
    />
    <Stack.Screen
      name={PROFILE_SCREEN}
      component={ProfileScreen}
      options={({ navigation }) => ({
        title: strings.PROFILE.title,
        headerLeft: null,
        headerRight: () => (
          <HeaderButton
            onPress={() => navigation.pop()}
            icon={rightArrow}
            style={[commonStyles.headerButton, styles.rightButton]}
          />
        ),
        headerTransparent: true,
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
