import React from 'react';
import { View, Image } from 'react-native';

import profileCircles from 'assets/images/profileCircles.png';
import defaultProfileImage from 'assets/images/defaultProfileImage.png';
import styles from './styles';

const ProfileBackground = () => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Image source={profileCircles} />
      <Image source={defaultProfileImage} style={styles.profileImage} />
    </View>
  </View>
);

export default ProfileBackground;
